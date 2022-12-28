from rest_framework import serializers
from .models import Row

class RowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Row
        fields = ['id', 'first_name', 'last_name', 'phone', 'group', 'user_id']
        depth = 1