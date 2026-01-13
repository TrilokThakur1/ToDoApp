
from django.urls import path
from . import views

urlpatterns = [
     path('createTask',views.createTask),
     path('showTask',views.showAllTask),
     path('delete/<int:id>',views.TaskDelete)
]
