from django.urls import path
from .views import *

urlpatterns = [
    path('login',loginUser ,name='login'),
    path('logout',closeaccount ,name='logout'),
]
