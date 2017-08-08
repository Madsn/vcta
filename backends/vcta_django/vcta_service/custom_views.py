from django.db.models.functions import Cast
from drf_multiple_model.views import MultipleModelAPIView
from .serializers import TripSerializer, UserSerializer
from .serializers import ScoreboardUserSerializer, ScoreboardTeamSerializer
from django.db.models import Sum, Count, F, FloatField

from . import models


class Dashboard(MultipleModelAPIView):
    """
    Gets data relevant for dashboard.
    Trips: Trips related to the current user
    User: Info about the current user
    """
    def get(self, request, *args, **kwargs):
        user = request.user
        self.queryList = [
            (models.Trip.objects.filter(user=user), TripSerializer),
            (models.User.objects.filter(pk=user.id), UserSerializer),
        ]
        return super(Dashboard, self).get(request, *args, **kwargs)


class Scoreboard(MultipleModelAPIView):
    def get(self, request, *args, **kwargs):
        users_query = models.User.objects.values("username", "team__name", "team") \
            .annotate(distance=Sum("trips__distance"),
                      days=Count("trips__date", distinct=True))

        teams_query = models.Team.objects \
            .values("id", "name", "captain", "captain__username") \
            .annotate(distance=Sum("members__trips__distance"),
                      memberCount=Count("members", distinct=True),
                      days=Count("members__trips__date"),
                      daysPerMember=Cast(F("days"), FloatField())/Cast(F("memberCount"), FloatField()),
                      distancePerMember=Cast(F("distance"), FloatField())/Cast(F("memberCount"), FloatField()))

        self.queryList = [
            (users_query, ScoreboardUserSerializer),
            (teams_query, ScoreboardTeamSerializer),
        ]
        return super(Scoreboard, self).get(request, *args, **kwargs)
