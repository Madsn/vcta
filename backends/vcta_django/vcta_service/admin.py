from django.contrib import admin
from vcta_service.models import Hero, Trip, Team, User, Config, TeamJoinRequest

admin.site.register(Hero)
admin.site.register(User)
admin.site.register(Trip)
admin.site.register(Team)
admin.site.register(Config)
admin.site.register(TeamJoinRequest)
