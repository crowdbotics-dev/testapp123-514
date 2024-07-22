from rest_framework import authentication
from support_training.models import CulinaryCertification, ContentGuidelines
from .serializers import ContentGuidelinesSerializer, CulinaryCertificationSerializer
from rest_framework import viewsets


class CulinaryCertificationViewSet(viewsets.ModelViewSet):
    serializer_class = CulinaryCertificationSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = CulinaryCertification.objects.all()


class ContentGuidelinesViewSet(viewsets.ModelViewSet):
    serializer_class = ContentGuidelinesSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = ContentGuidelines.objects.all()
