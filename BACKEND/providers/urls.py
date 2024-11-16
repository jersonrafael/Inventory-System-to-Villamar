from django.urls import path
from .views import *

urlpatterns = [
    path('providers/', all_providers, name='providers' )
]
