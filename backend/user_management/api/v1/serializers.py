from rest_framework import serializers
from user_management.models import UserActivity, UserProfile


class UserActivitySerializer(serializers.ModelSerializer):

    class Meta:
        model = UserActivity
        fields = "__all__"


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = "__all__"
