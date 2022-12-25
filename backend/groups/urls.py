from django.urls import path, include
from groups import views

urlpatterns = [
    path('', views.user_groups),
]