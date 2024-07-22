from django.contrib import admin
from .models import AugmentedRealityKitchen, CulinaryContent, LocalCuisineSuggestion

admin.site.register(AugmentedRealityKitchen)
admin.site.register(LocalCuisineSuggestion)
admin.site.register(CulinaryContent)

# Register your models here.
