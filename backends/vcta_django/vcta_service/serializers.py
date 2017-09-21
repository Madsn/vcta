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


class TeamMemberSerializer(serializers.Serializer):
    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    id = serializers.IntegerField()
    username = serializers.CharField()
    distance = serializers.FloatField()
    days = serializers.IntegerField()


class UserSerializer(serializers.Serializer):
    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    id = serializers.IntegerField()
    username = serializers.CharField()
    teamName = serializers.CharField(source="team__name")
    team = serializers.IntegerField()
    fullName = serializers.CharField(source="full_name")
    dateJoined = serializers.DateTimeField(source="date_joined")
    distance = serializers.FloatField()
    days = serializers.IntegerField()
    trips = serializers.IntegerField()


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


"""
class UserDetailsSerializer(ScoreboardUserSerializer):
    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    fullName = serializers.CharField(source="full_name")
    dateJoined = serializers.DateTimeField(source="date_joined")
    tripCount = serializers.IntegerField(source="trip_count")
"""


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


class InvitationSerializer(serializers.Serializer):
    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    id = serializers.IntegerField()
    team = serializers.IntegerField()
    recipient = serializers.IntegerField()
    teamName = serializers.CharField(source="team__name")
    recipientUsername = serializers.CharField(source="recipient__username")


class TeamRequestSerializer(serializers.Serializer):
    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    id = serializers.IntegerField()
    team = serializers.IntegerField()
    sender = serializers.IntegerField()
    teamName = serializers.CharField(source="team__name")
    senderUsername = serializers.CharField(source="sender__username")
