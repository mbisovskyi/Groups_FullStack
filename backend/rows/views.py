from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Row
from .serializers import RowSerializer
# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def group_rows(request, group_id):
    if request.method == 'GET':
        rows = Row.objects.filter(group_id = group_id)
        serializer = RowSerializer(rows, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = RowSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save(group_id = group_id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

