from django.conf import settings
from django.db import models


class SocialMediaIntegration(models.Model):
    "Generated Model"
    platform_name = models.CharField(
        max_length=100,
    )
    integration_details = models.JSONField()


# Create your models here.
