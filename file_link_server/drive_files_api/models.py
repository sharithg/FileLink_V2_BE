from django.db import models
from django.contrib import admin
from django.contrib.auth.models import User
from django.db import models


class Classes(models.Model):
    name = models.CharField(max_length=50)
    owner = models.ForeignKey(
        User, related_name="drive_classes", on_delete=models.CASCADE, null=True
    )


# Create your models here.
class DriveLinks(models.Model):
    file_id = models.CharField(max_length=200, null=True)
    file_type = models.CharField(max_length=50)
    file_name = models.CharField(max_length=100)
    file_view_link = models.URLField(max_length=500, null=True)
    file_icon_link = models.URLField(max_length=500, null=True)
    file_created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="drive_files_user", on_delete=models.CASCADE, null=True
    )
    college_class = models.ForeignKey(
        Classes, related_name="drive_files_class", on_delete=models.CASCADE
    )


class Events(models.Model):
    title = models.CharField(max_length=50)
    start = models.CharField(max_length=20)
    end = models.CharField(max_length=20)
    description = models.CharField(max_length=100)
    owner = models.ForeignKey(
        User, related_name="event_owner", on_delete=models.CASCADE, null=True
    )


class CredentialsModel(models.Model):
    owner = models.OneToOneField(
        User, related_name="google_api", on_delete=models.CASCADE, null=True
    )
    token = models.CharField(max_length=100, default="")
    refresh_token = models.CharField(max_length=100, null=True)
    token_uri = models.CharField(max_length=100, default="")
    client_id = models.CharField(max_length=100, default="")
    client_secret = models.CharField(max_length=100, default="")
    scopes = models.CharField(max_length=100, default="")
    isauthenticated = models.BooleanField(default=False)

