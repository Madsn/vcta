from rest_framework import serializers

from . import models


class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Hero
        fields = '__all__'


class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Trip
        fields = '__all__'


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Team
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['id', 'username', 'full_name', 'email', 'team', 'date_joined']


class ConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Config
        fields = '__all__'


class ScoreboardUserSerializer(serializers.Serializer):
    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    username = serializers.CharField()
    team = serializers.CharField()
    trips__distance__sum = serializers.IntegerField()
    # TODO - days


class ScoreboardTeamSerializer(serializers.Serializer):
    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    name = serializers.CharField()
    captain__username = serializers.CharField()
    members__trips__distance__sum = serializers.IntegerField()
