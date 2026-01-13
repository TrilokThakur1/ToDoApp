
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('api/task/',include('TaskApp.urls')),
    path('admin/', admin.site.urls),
]
