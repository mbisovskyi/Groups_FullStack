from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Group
from .serializers import GroupSerializer
# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_groups(request):
    if request.method == 'GET':
        groups = Group.objects.filter(user_id=request.user.id)
        serializer = GroupSerializer(groups, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = GroupSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)