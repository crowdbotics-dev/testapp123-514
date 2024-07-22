from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import UserSecurityViewSet

router = DefaultRouter()
router.register("usersecurity", UserSecurityViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
