from django.conf import settings
from django.db import models


class UserCommunityProfile(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="community_profile",
    )
    recipes = models.ManyToManyField(
        "recipe_management.Recipe",
        related_name="user_community_profiles",
    )
    favorites = models.ManyToManyField(
        "recipe_management.Recipe",
        related_name="favorited_by",
    )


# Create your models here.
