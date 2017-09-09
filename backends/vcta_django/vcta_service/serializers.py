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
    fullName = serializers.CharField(source="full_name")
    dateJoined = serializers.DateTimeField(source="date_joined")

    class Meta:
        model = models.User
        fields = ['id', 'username', 'fullName', 'email', 'team', 'dateJoined']


class ConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Config
        fields = '__all__'


class ScoreboardUserSerializer(serializers.Serializer):
    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    id = serializers.IntegerField()
    username = serializers.CharField()
    teamName = serializers.CharField(source="team__name")
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
    captainName = serializers.CharField(source="captain__username")
    distance = serializers.IntegerField()
    # days = serializers.IntegerField()
    avgDays = serializers.FloatField()
    avgDistance = serializers.FloatField()
