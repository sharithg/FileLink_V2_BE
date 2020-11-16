from rest_framework import serializers
from .models import DriveLinks, Classes, Events


class DriveLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = DriveLinks
        fields = "__all__"
    


class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = "__all__"


class ClassListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = "__all__"  # include all models
