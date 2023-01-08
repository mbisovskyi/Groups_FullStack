from django.urls import path, include
from rows import views

urlpatterns = [
    path('<int:group_id>/', views.all_group_rows),
    path('delete_row/<int:row_id>/', views.delete_row),
    path('<int:group_id>/users/<int:user_id>/', views.user_rows),
]