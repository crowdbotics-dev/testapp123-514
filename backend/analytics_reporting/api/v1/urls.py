from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import SEOAnalyticsViewSet, TrendingIngredientsViewSet

router = DefaultRouter()
router.register("seoanalytics", SEOAnalyticsViewSet)
router.register("trendingingredients", TrendingIngredientsViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
