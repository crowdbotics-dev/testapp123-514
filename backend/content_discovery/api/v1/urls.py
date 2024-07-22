from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    AugmentedRealityKitchenViewSet,
    CulinaryContentViewSet,
    LocalCuisineSuggestionViewSet,
)

router = DefaultRouter()
router.register("augmentedrealitykitchen", AugmentedRealityKitchenViewSet)
router.register("localcuisinesuggestion", LocalCuisineSuggestionViewSet)
router.register("culinarycontent", CulinaryContentViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
