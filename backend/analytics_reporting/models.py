from django.conf import settings
from django.db import models


class SEOAnalytics(models.Model):
    "Generated Model"
    recipe = models.ForeignKey(
        "recipe_management.Recipe",
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name="seo_analytics",
    )
    seo_score = models.IntegerField()


class TrendingIngredients(models.Model):
    "Generated Model"
    ingredient = models.CharField(
        max_length=100,
    )
    trend_score = models.IntegerField()


# Create your models here.
