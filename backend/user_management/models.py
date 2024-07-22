from django.conf import settings
from django.db import models


class UserActivity(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="activities",
    )
    recent_uploads = models.JSONField(
        null=True,
        blank=True,
    )
    likes = models.IntegerField(
        null=True,
        blank=True,
    )
    comments = models.IntegerField(
        null=True,
        blank=True,
    )


class UserProfile(models.Model):
    "Generated Model"
    user = models.OneToOneField(
        "users.User",
        on_delete=models.CASCADE,
        related_name="profile",
    )
    interests = models.TextField(
        null=True,
        blank=True,
    )


# Create your models here.
