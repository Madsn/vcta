from rest_framework import viewsets, response, permissions, generics, filters

from vcta_service.models import User
from . import models
from . import serializers


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def retrieve(self, request, pk=None):
        if pk == 'i':
            return response.Response(serializers.UserSerializer(request.user,
                                     context={'request': request}).data)
        return super(UserViewSet, self).retrieve(request, pk)


class HeroList(generics.ListCreateAPIView):
    queryset = models.Hero.objects.all()
    serializer_class = serializers.HeroSerializer


class HeroDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Hero.objects.all()
    serializer_class = serializers.HeroSerializer


class TripList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = models.Trip.objects.all()
    serializer_class = serializers.TripSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = ('date',)
    ordering = ('-date',)


class TripDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = models.Trip.objects.all()
    serializer_class = serializers.TripSerializer


class TeamList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = models.Team.objects.all()
    serializer_class = serializers.TeamSerializer


class TeamDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = models.Team.objects.all()
    serializer_class = serializers.TeamSerializer


class UserList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


class ConfigList(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = models.Config.objects.all()
    serializer_class = serializers.ConfigSerializer


class ConfigDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = models.Config.objects.all()
    serializer_class = serializers.ConfigSerializer
