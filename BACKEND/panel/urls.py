from django.urls import path
from .views import *
urlpatterns = [
    path('', index, name='index'),
    path('configuration/',panel_configuration , name='configuration')
]
