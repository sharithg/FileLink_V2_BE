from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("dashboard_ui.urls")),
    path("", include("drive_files_api.urls")),
    path("", include("accounts_api.urls")),
]
