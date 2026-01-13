from rest_framework.serializers import ModelSerializer
from .models import TaskModel

class TaskUser(ModelSerializer):
    class Meta:
        model = TaskModel
        fields = '__all__'