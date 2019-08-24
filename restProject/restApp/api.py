from django.urls import path
from .views import *
urlpatterns = [
    path('restApp/',restApp),
    path('restApp/<int:id>/',restApp_details)
]