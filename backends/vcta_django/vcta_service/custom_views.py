from drf_multiple_model.views import MultipleModelAPIView
from .serializers import TripSerializer, UserSerializer, TeamSerializer

from . import models


class Dashboard(MultipleModelAPIView):

    def get(self, request, *args, **kwargs):
        user = request.user
        self.queryList = [
            (models.Trip.objects.filter(user=user),TripSerializer),
            (models.User.objects.filter(pk=user.id),UserSerializer),
        ]
        return super(Dashboard, self).get(request, *args, **kwargs)


class Scoreboard(MultipleModelAPIView):

    def get(self, request, *args, **kwargs):
        self.queryList = [
            (models.Trip.objects.all(),TripSerializer),
            (models.Team.objects.all(),TeamSerializer),
            (models.User.objects.all(),UserSerializer),
        ]
        return super(Scoreboard, self).get(request, *args, **kwargs)
