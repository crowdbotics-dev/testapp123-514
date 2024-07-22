"""testapp123_514 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic.base import TemplateView
from allauth.account.views import confirm_email
from rest_framework import permissions
from drf_spectacular.views import SpectacularJSONAPIView, SpectacularSwaggerView

urlpatterns = [
    path("accounts/", include("allauth.urls")),
    path("modules/", include("modules.urls")),
    path("api/v1/", include("home.api.v1.urls")),
    path("admin/", admin.site.urls),
    path("users/", include("users.urls", namespace="users")),
    path("rest-auth/", include("dj_rest_auth.urls")),
    # Override email confirm to use allauth's HTML view instead of rest_auth's API view
    path("rest-auth/registration/account-confirm-email/<str:key>/", confirm_email),
    path("rest-auth/registration/", include("dj_rest_auth.registration.urls")),
    path("api/v1/", include("analytics_reporting.api.v1.urls")),
    path("analytics_reporting/", include("analytics_reporting.urls")),
    path("api/v1/", include("community_engagement.api.v1.urls")),
    path("community_engagement/", include("community_engagement.urls")),
    path("api/v1/", include("content_discovery.api.v1.urls")),
    path("content_discovery/", include("content_discovery.urls")),
    path("api/v1/", include("integration_extensibility.api.v1.urls")),
    path("integration_extensibility/", include("integration_extensibility.urls")),
    path("api/v1/", include("recipe_management.api.v1.urls")),
    path("recipe_management/", include("recipe_management.urls")),
    path("api/v1/", include("security_privacy.api.v1.urls")),
    path("security_privacy/", include("security_privacy.urls")),
    path("api/v1/", include("support_training.api.v1.urls")),
    path("support_training/", include("support_training.urls")),
    path("api/v1/", include("user_management.api.v1.urls")),
    path("user_management/", include("user_management.urls")),
    path("api/v1/", include("users.api.v1.urls")),
]

admin.site.site_header = "TestApp123"
admin.site.site_title = "TestApp123 Admin Portal"
admin.site.index_title = "TestApp123 Admin"

# swagger
urlpatterns += [
    path("api-docs/schema/", SpectacularJSONAPIView.as_view(), name="schema"),
    path(
        "api-docs/", SpectacularSwaggerView.as_view(url_name="schema"), name="api_docs"
    ),
]


urlpatterns += [re_path(r".*", TemplateView.as_view(template_name="index.html"))]
