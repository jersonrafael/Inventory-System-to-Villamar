from django.urls import path
from .views import *

urlpatterns = [
    path('providers', providers, name='providers' )
]
