from rest_framework import serializers
from .models import DriveLinks, Classes


class DriveLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = DriveLinks
        fields = "__all__"


class ClassListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = "__all__"  # include all models
