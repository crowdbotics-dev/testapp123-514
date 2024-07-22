from django.conf import settings
from django.db import models


class Recipe(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    cuisine = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    difficulty = models.CharField(
        max_length=50,
        null=True,
        blank=True,
    )
    dietary_restrictions = models.CharField(
        max_length=255,
        null=True,
        blank=True,
    )
    nutritional_info = models.JSONField(
        null=True,
        blank=True,
    )
    ingredient_list = models.TextField()
    instructions = models.TextField()
    rating = models.FloatField(
        null=True,
        blank=True,
    )
    reviews = models.TextField(
        null=True,
        blank=True,
    )


# Create your models here.
