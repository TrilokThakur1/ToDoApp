from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import TaskModel

from .serializers import TaskUser

@api_view(['POST'])
def createTask(request):
    serializer = TaskUser(data= request.data)
    if serializer.is_valid():   
     serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def showAllTask(request):
    data = TaskModel.objects.all()
    serializer = TaskUser(data,many=True)
    return Response(serializer.data)

@api_view(['Delete'])
def TaskDelete(request,id):
    Data = TaskModel.objects.get(id=id)
    Data.delete()
    return Response({"massage":"Dish Deleted!"})