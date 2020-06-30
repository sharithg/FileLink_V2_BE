from django.urls import path, include, re_path
from . import views

urlpatterns = [
  re_path(r'^dashboard/', views.index),
  path("", views.index)
]
