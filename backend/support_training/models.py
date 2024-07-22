from django.conf import settings
from django.db import models


class CulinaryCertification(models.Model):
    "Generated Model"
    certification_name = models.CharField(
        max_length=255,
    )
    description = models.TextField()


class ContentGuidelines(models.Model):
    "Generated Model"
    guideline_text = models.TextField()


# Create your models here.
