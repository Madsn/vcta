from django.db.models.functions import Cast
from django.http import HttpResponseForbidden, HttpResponseNotFound
from drf_multiple_model.views import MultipleModelAPIView
from rest_framework import permissions, generics, exceptions, status, views
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from vcta_service.models import Trip, User, TeamJoinRequest

from .serializers import ScoreboardUserSerializer, ScoreboardTeamSerializer, TripSerializer, UserSerializer, \
    TeamMemberSerializer, TeamRequestSerializer
from django.db.models import Sum, Count, F, FloatField
from django.utils.dateparse import parse_date

from . import models

teams_query = models.Team.objects \
    .values("id", "name", "captain", "captain__username") \
    .annotate(distance=Sum("members__trips__distance"),
              memberCount=Count("members", distinct=True),
              days=Count("members__trips__date"),
              avgDays=Cast(F("days"), FloatField()) / Cast(F("memberCount"), FloatField()),
              avgDistance=Cast(F("distance"), FloatField()) / Cast(F("memberCount"), FloatField()))


class Trip(generics.CreateAPIView, generics.DestroyAPIView):
    """
    For creation and deletion of trips
    create - creates trip, with the currently authenticated user as owner
    delete - deletes trip, if the currently authenticated user is owner
    """
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = TripSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        new_trip = Trip.objects.create(distance=data["distance"], date=parse_date(data["date"]), user=request.user)
        new_trip.save()
        serializer = TripSerializer(new_trip)
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        pk = kwargs["pk"]
        trip = get_object_or_404(models.Trip, pk=pk)
        if trip.user == request.user:
            trip.delete()
            return Response()
        else:
            return Response("Users can only delete own trips", status=status.HTTP_403_FORBIDDEN)


class TeamRequests(generics.ListAPIView):
    """
    Gets requests with currently authenticated user as sender
    """
    permissions_classes = (permissions.IsAuthenticated,)
    serializer_class = TeamRequestSerializer

    def get(self, request, *args, **kwargs):
        self.queryset = TeamJoinRequest.objects.filter(sender=request.user)\
            .values("id", "team", "sender", "created_at", "team__name", "sender__username", "status")
        return super(TeamRequests, self).get(request, *args, **kwargs)


class TeamRequestsForTeam(generics.ListAPIView):
    """
    Gets requests for a specific team

    Only Captain should be able to get requests for his team
    """
    permissions_classes = (permissions.IsAuthenticated,)
    serializer_class = TeamRequestSerializer

    def get(self, request, *args, **kwargs):
        if not hasattr(request.user, "team") or request.user.team is None:
            return HttpResponseForbidden("Must be authenticated and member of a team")
        current_user_team = request.user.team
        team_captain = current_user_team.captain
        if team_captain.id != request.user.id:
            return HttpResponseForbidden("Must be team captain")
        pk = kwargs["pk"]
        self.queryset = TeamJoinRequest.objects.filter(team=pk) \
            .values("id", "team", "sender", "created_at", "team__name", "sender__username", "status")
        return super(TeamRequestsForTeam, self).get(request, *args, **kwargs)


class AcceptTeamRequest(views.APIView):
    """
    Captain accepts a users request to join a team
    """
    permissions_classes = (permissions.IsAuthenticated,)

    def patch(self, request, *args, **kwargs):
        pk = kwargs["pk"]
        if not hasattr(request.user, "team") or request.user.team is None:
            return HttpResponseForbidden("Must be authenticated and member of a team")
        current_user_team = request.user.team
        team_captain = current_user_team.captain
        if team_captain.id != request.user.id:
            return HttpResponseForbidden("Team request patch forbidden: Current user not captain of own team")
        join_request = TeamJoinRequest.objects.get(pk=pk)
        if not join_request:
            return HttpResponseNotFound("Team request patch failed: No request found matching id: " + pk)
        if current_user_team.id != join_request.team.id:
            return HttpResponseForbidden("Team request patch forbidden: Current user not captain of target "
                                         "team with id: " + join_request.team.id)
        sender = User.objects.get(pk=join_request.sender.id)
        if not sender:
            return HttpResponseForbidden("Team request patch failed: No user matching request sender id: " +
                                         join_request.sender.id)
        sender.team = current_user_team
        sender.save()
        join_request.status = "ACCEPTED"
        join_request.save()

        queryset = TeamJoinRequest.objects.filter(pk=pk).values("id", "team", "sender", "created_at",
                                                                "team__name", "sender__username", "status").first()
        serializer = TeamRequestSerializer(queryset)
        return Response(serializer.data)


class UserDetails(MultipleModelAPIView):
    """
    Gets data relevant for dashboard and user details page.
    Trips: Trips related to the current user
    User: Info about the current user
    """
    permission_classes = (permissions.AllowAny,)
    objectify = True

    def get(self, request, *args, **kwargs):
        pk = kwargs["pk"]
        user = User.objects.get(pk=pk)
        self.queryList = [
            (models.Trip.objects.filter(user=user), TripSerializer, "trips"),
            (models.User.objects.filter(pk=user.id).values("id", "username", "team__name", "team__captain",
                                                           "team", "full_name", "date_joined",
                                                           "email")
             .annotate(distance=Sum("trips__distance"), days=Count("trips__date", distinct=True), trips=Count("trips")),
             UserSerializer, "userInfo")
        ]
        return super(UserDetails, self).get(request, *args, **kwargs)


class TeamDetails(MultipleModelAPIView):
    """
    Gets data relevant for team details page.
    teamInfo: Info about the requested team
    members: Info about members of the team
    """
    permission_classes = (permissions.AllowAny,)
    objectify = True

    def get(self, request, *args, **kwargs):
        pk = kwargs["pk"]
        self.queryList = [
            (teams_query.filter(pk=pk), ScoreboardTeamSerializer, "teamInfo"),
            (models.User.objects.filter(team=pk).values("id", "username")
             .annotate(distance=Sum("trips__distance"), days=Count("trips__date", distinct=True)),
             TeamMemberSerializer, "members"),
        ]
        return super(TeamDetails, self).get(request, *args, **kwargs)


class Dashboard(UserDetails):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        """
        Gets userdetails for current user
        """
        return super(Dashboard, self).get(request, *args, pk=request.user.id, **kwargs)


class Scoreboard(MultipleModelAPIView):
    objectify = True
    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):
        users_query = models.User.objects.values("id", "username", "team__name", "team") \
            .annotate(distance=Sum("trips__distance"),
                      days=Count("trips__date", distinct=True))

        self.queryList = {
            (users_query, ScoreboardUserSerializer, 'individuals'),
            (teams_query, ScoreboardTeamSerializer, 'teams'),
        }
        return super(Scoreboard, self).get(request, *args, **kwargs)
