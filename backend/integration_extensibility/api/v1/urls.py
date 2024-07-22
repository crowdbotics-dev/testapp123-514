from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import SocialMediaIntegrationViewSet

router = DefaultRouter()
router.register("socialmediaintegration", SocialMediaIntegrationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
