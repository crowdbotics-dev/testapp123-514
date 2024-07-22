from rest_framework import serializers
from community_engagement.models import UserCommunityProfile


class UserCommunityProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserCommunityProfile
        fields = "__all__"
