from rest_framework import serializers
from content_discovery.models import (
    AugmentedRealityKitchen,
    CulinaryContent,
    LocalCuisineSuggestion,
)


class AugmentedRealityKitchenSerializer(serializers.ModelSerializer):

    class Meta:
        model = AugmentedRealityKitchen
        fields = "__all__"


class LocalCuisineSuggestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = LocalCuisineSuggestion
        fields = "__all__"


class CulinaryContentSerializer(serializers.ModelSerializer):

    class Meta:
        model = CulinaryContent
        fields = "__all__"
