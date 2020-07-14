from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from .models import DriveLinks
from .serializers import ClassListSerializer, DriveLinksSerializer
from django.core.exceptions import PermissionDenied
import requests
from rest_framework.decorators import action
from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework import status
import json


class DriveClassesViewset(viewsets.ModelViewSet):
    permissions = [permissions.IsAuthenticated]
    serializer_class = ClassListSerializer

    def get_queryset(self):
        if not self.request.user.is_authenticated:
            raise PermissionDenied()
        return self.request.user.drive_classes.all()

    def perform_create(self, serializer):
        if not self.request.user.is_authenticated:
            raise PermissionDenied()
        # print("BOD: ", self.request.body)
        serializer.save(owner=self.request.user)
