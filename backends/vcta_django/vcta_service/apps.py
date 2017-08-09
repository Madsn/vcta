from django.apps import AppConfig


class VctaServiceConfig(AppConfig):
    name = 'vcta_service'

    def ready(self):
        from . import signals