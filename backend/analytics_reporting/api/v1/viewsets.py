from rest_framework import authentication
from analytics_reporting.models import SEOAnalytics, TrendingIngredients
from .serializers import SEOAnalyticsSerializer, TrendingIngredientsSerializer
from rest_framework import viewsets


class SEOAnalyticsViewSet(viewsets.ModelViewSet):
    serializer_class = SEOAnalyticsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = SEOAnalytics.objects.all()


class TrendingIngredientsViewSet(viewsets.ModelViewSet):
    serializer_class = TrendingIngredientsSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = TrendingIngredients.objects.all()
