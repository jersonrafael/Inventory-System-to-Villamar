from django.urls import path
from .views import *
urlpatterns = [
    path('panel', panelView.as_view() , name='panel')
]
