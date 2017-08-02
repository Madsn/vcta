from rest_framework.views import APIView
from rest_framework.response import Response

from . import models


class Dashboard(APIView):

    def get(self, request, format=None):
        trips = models.Trip.objects.all()
        return Response(trips)


class Scoreboard(APIView):

    def get(self, request, format=None):
        trips = models.Trip.objects.all()
        return Response(trips)
