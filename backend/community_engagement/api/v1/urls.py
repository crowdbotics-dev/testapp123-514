from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import UserCommunityProfileViewSet

router = DefaultRouter()
router.register("usercommunityprofile", UserCommunityProfileViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
