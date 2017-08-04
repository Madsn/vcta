from drf_multiple_model.views import MultipleModelAPIView
from .serializers import TripSerializer, UserSerializer
from .serializers import ScoreboardUserSerializer, ScoreboardTeamSerializer
from django.db.models import Sum, Count

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
        self.queryList = [
            (models.User.objects.all().values('username', 'team').annotate(Sum('trips__distance'),
                                                                           Count('trips__date', distinct=True)),
             ScoreboardUserSerializer),
            (models.Team.objects.all().values('name', 'captain__username').annotate(Sum('members__trips__distance')),
             ScoreboardTeamSerializer),
        ]
        return super(Scoreboard, self).get(request, *args, **kwargs)
