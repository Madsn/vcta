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
    team = serializers.IntegerField()
    distance = serializers.IntegerField()
    days = serializers.IntegerField()


class ScoreboardTeamSerializer(serializers.Serializer):
    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    id = serializers.IntegerField()
    name = serializers.CharField()
    memberCount = serializers.IntegerField()
    captain = serializers.IntegerField()
    distance = serializers.IntegerField()
    # days = serializers.IntegerField()
    daysPerMember = serializers.FloatField()
    distancePerMember = serializers.FloatField()
