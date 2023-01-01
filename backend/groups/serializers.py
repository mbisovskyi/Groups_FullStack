from rest_framework import serializers
from .models import Group

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'start_time', 'end_time', 'date', 'max_value', 'current_value', 'is_active', 'is_deleted', 'user_id']