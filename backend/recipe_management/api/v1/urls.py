from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import RecipeViewSet

router = DefaultRouter()
router.register("recipe", RecipeViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
