from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import UserActivityViewSet, UserProfileViewSet

router = DefaultRouter()
router.register("useractivity", UserActivityViewSet)
router.register("userprofile", UserProfileViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
