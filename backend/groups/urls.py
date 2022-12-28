from django.urls import path, include
from groups import views

urlpatterns = [
    path('', views.user_groups),
    path('<int:group_id>', views.patch_group_data),
    path('active/', views.get_active_groups),
]