from rest_framework import serializers
from support_training.models import ContentGuidelines, CulinaryCertification


class CulinaryCertificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = CulinaryCertification
        fields = "__all__"


class ContentGuidelinesSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContentGuidelines
        fields = "__all__"
