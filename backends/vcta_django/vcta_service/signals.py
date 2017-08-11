from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from vcta_service.models import User


@receiver(post_save, sender=User)
def init_new_user(sender, instance, signal, created, **kwargs):
    if created:
        Token.objects.create(user=instance)
