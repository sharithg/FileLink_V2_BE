from rest_framework import routers
from django.urls import path, include
from .views import DriveClassesViewset, EventsViewset
from .drivefiles_views import DriveLinksViewset
from . import google_api_views
from . import drivefiles_views

router = routers.DefaultRouter()
router.register("api/driveclasses", DriveClassesViewset, "driveclasses")
router.register("api/drivelinks", DriveLinksViewset, "drivelinks")
router.register("api/events", EventsViewset, "events")

urlpatterns = router.urls

urlpatterns.append(path("index/", google_api_views.index, name="index"))
urlpatterns.append(path("authorize/", google_api_views.authorize, name="authorize"))
urlpatterns.append(
    path("oauth2callback", google_api_views.oauth2callback, name="oauth2callback")
)
urlpatterns.append(
    path(
        "clear_credentials/",
        google_api_views.clear_credentials,
        name="clear_credentials",
    )
)
urlpatterns.append(path("revoke/", google_api_views.revoke, name="revoke"))
urlpatterns.append(
    path("clear/", google_api_views.clear_credentials, name="clear_credentials")
)
urlpatterns.append(
    path("is_google_auth/", google_api_views.is_google_auth, name="is_google_auth")
)

urlpatterns.append(
    path("in_auth_flow/", google_api_views.in_auth_flow, name="in_auth_flow")
)

urlpatterns.append(path("test_api/", drivefiles_views.test_api, name="test_api"))
