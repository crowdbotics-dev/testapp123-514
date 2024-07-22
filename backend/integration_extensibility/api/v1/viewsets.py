from rest_framework import authentication
from integration_extensibility.models import SocialMediaIntegration
from .serializers import SocialMediaIntegrationSerializer
from rest_framework import viewsets


class SocialMediaIntegrationViewSet(viewsets.ModelViewSet):
    serializer_class = SocialMediaIntegrationSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = SocialMediaIntegration.objects.all()
