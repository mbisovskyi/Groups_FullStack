from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Group
from authentication.models import User
from .serializers import GroupSerializer
# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_groups(request):
    if request.method == 'GET':
        owner = User.objects.get(is_owner=True)
        groups = Group.objects.filter(user_id=owner.id, is_deleted=False)
        serializer = GroupSerializer(groups, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = GroupSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def patch_group_data(request, group_id):
    if request.method == 'PATCH':
        group = Group.objects.get(id = group_id)
        serializer = GroupSerializer(group, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(status=status.HTTP_304_NOT_MODIFIED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_active_groups(request):
    if request.method == 'GET':
        groups = Group.objects.filter(is_active = True)
        serializer = GroupSerializer(groups, many=True)
        return Response(serializer.data)