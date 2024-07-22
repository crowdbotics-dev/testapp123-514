from rest_framework import serializers
from security_privacy.models import UserSecurity


class UserSecuritySerializer(serializers.ModelSerializer):

    class Meta:
        model = UserSecurity
        fields = "__all__"
