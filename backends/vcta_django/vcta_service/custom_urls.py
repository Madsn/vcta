from django.conf.urls import url

from . import custom_views


app_name = 'vcta_service_custom'
urlpatterns = [
    url(r'^dashboard/$', custom_views.Dashboard.as_view(), name='dashboard'),
    url(r'^scoreboard/$', custom_views.Scoreboard.as_view(), name='scoreboard'),
    url(r'^addtrip/$', custom_views.AddTrip.as_view(), name='addTrip'),
]
