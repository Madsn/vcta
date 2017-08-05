from django.db.models.functions import Cast
from drf_multiple_model.views import MultipleModelAPIView
from .serializers import TripSerializer, UserSerializer
from .serializers import ScoreboardUserSerializer, ScoreboardTeamSerializer
from django.db.models import Sum, Count, F, FloatField

from . import models


class Dashboard(MultipleModelAPIView):
    def get(self, request, *args, **kwargs):
        user = request.user
        self.queryList = [
            (models.Trip.objects.filter(user=user), TripSerializer),
            (models.User.objects.filter(pk=user.id), UserSerializer),
        ]
        return super(Dashboard, self).get(request, *args, **kwargs)


class Scoreboard(MultipleModelAPIView):
    def get(self, request, *args, **kwargs):
        users_query = models.User.objects.values("username", "team") \
            .annotate(distance=Sum("trips__distance"),
                      days=Count("trips__date", distinct=True))

        teams_query = models.Team.objects \
            .values("id", "name", "captain") \
            .annotate(distance=Sum("members__trips__distance"),
                      membercount=Count("members", distinct=True),
                      days=Count("members__trips__date"),
                      days_per_member=Cast(F("days"), FloatField())/Cast(F("membercount"), FloatField()),
                      distance_per_member=Cast(F("distance"), FloatField())/Cast(F("membercount"), FloatField()))

        self.queryList = [
            (users_query, ScoreboardUserSerializer),
            (teams_query, ScoreboardTeamSerializer),
        ]
        return super(Scoreboard, self).get(request, *args, **kwargs)
