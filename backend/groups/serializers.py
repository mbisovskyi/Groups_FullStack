from rest_framework import serializers
from .models import Group

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'start_time', 'end_time', 'date', 'max_rows', 'user_id']
        depth = 1