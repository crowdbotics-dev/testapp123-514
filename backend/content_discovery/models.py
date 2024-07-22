from django.conf import settings
from django.db import models


class AugmentedRealityKitchen(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="augmented_reality_kitchens",
    )
    measurement_data = models.JSONField(
        null=False,
        blank=False,
    )


class LocalCuisineSuggestion(models.Model):
    "Generated Model"
    location = models.CharField(
        max_length=255,
    )
    cuisine_type = models.CharField(
        max_length=100,
    )
    suggested_recipes = models.ManyToManyField(
        "recipe_management.Recipe",
        related_name="local_cuisine_suggestions",
    )


class CulinaryContent(models.Model):
    "Generated Model"
    source_name = models.CharField(
        max_length=255,
    )
    source_url = models.URLField(
        max_length=255,
        null=True,
        blank=True,
    )
    content_type = models.CharField(
        max_length=50,
    )
    content = models.TextField()


# Create your models here.
