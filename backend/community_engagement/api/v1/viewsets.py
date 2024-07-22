from rest_framework import authentication
from community_engagement.models import UserCommunityProfile
from .serializers import UserCommunityProfileSerializer
from rest_framework import viewsets


class UserCommunityProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UserCommunityProfileSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = UserCommunityProfile.objects.all()
