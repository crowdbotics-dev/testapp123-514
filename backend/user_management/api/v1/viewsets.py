from rest_framework import authentication
from user_management.models import UserActivity, UserProfile
from .serializers import UserActivitySerializer, UserProfileSerializer
from rest_framework import viewsets


class UserActivityViewSet(viewsets.ModelViewSet):
    serializer_class = UserActivitySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = UserActivity.objects.all()


class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UserProfileSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = UserProfile.objects.all()
