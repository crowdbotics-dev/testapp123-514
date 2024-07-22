from rest_framework import authentication
from recipe_management.models import Recipe
from .serializers import RecipeSerializer
from rest_framework import viewsets


class RecipeViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Recipe.objects.all()
