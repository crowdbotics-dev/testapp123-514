from django.conf import settings
from django.db import models


class UserSecurity(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="security_settings",
    )
    two_step_verification = models.BooleanField(
        null=False,
        blank=False,
    )
    biometric_authentication = models.BooleanField(
        null=False,
        blank=False,
    )


# Create your models here.
