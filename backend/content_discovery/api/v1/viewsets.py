from rest_framework import authentication
from content_discovery.models import (
    AugmentedRealityKitchen,
    LocalCuisineSuggestion,
    CulinaryContent,
)
from .serializers import (
    AugmentedRealityKitchenSerializer,
    CulinaryContentSerializer,
    LocalCuisineSuggestionSerializer,
)
from rest_framework import viewsets


class AugmentedRealityKitchenViewSet(viewsets.ModelViewSet):
    serializer_class = AugmentedRealityKitchenSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = AugmentedRealityKitchen.objects.all()


class LocalCuisineSuggestionViewSet(viewsets.ModelViewSet):
    serializer_class = LocalCuisineSuggestionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = LocalCuisineSuggestion.objects.all()


class CulinaryContentViewSet(viewsets.ModelViewSet):
    serializer_class = CulinaryContentSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = CulinaryContent.objects.all()
