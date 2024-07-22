from rest_framework import serializers
from analytics_reporting.models import SEOAnalytics, TrendingIngredients


class SEOAnalyticsSerializer(serializers.ModelSerializer):

    class Meta:
        model = SEOAnalytics
        fields = "__all__"


class TrendingIngredientsSerializer(serializers.ModelSerializer):

    class Meta:
        model = TrendingIngredients
        fields = "__all__"
