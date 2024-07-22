from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ContentGuidelinesViewSet, CulinaryCertificationViewSet

router = DefaultRouter()
router.register("culinarycertification", CulinaryCertificationViewSet)
router.register("contentguidelines", ContentGuidelinesViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
