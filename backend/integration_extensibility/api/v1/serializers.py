from rest_framework import serializers
from integration_extensibility.models import SocialMediaIntegration


class SocialMediaIntegrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = SocialMediaIntegration
        fields = "__all__"
