from rest_framework import authentication
from security_privacy.models import UserSecurity
from .serializers import UserSecuritySerializer
from rest_framework import viewsets


class UserSecurityViewSet(viewsets.ModelViewSet):
    serializer_class = UserSecuritySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = UserSecurity.objects.all()
