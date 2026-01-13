from django.db import models

# Create your models here.
class TaskModel(models.Model):
    TaskName = models.CharField()
    Title = models.CharField()
    Discriptions =  models.CharField()

    