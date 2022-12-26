from django.urls import path, include
from rows import views

urlpatterns = [
    path('<int:group_id>/', views.group_rows),
]