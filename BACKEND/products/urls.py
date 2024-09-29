from django.urls import path
from .views import *
urlpatterns = [
    path('', index, name='index'),

    path('home/', home_view, name='home'),

    path('products/', products, name='products'),  

    path('configuration/',panel_configuration , name='configuration')      
]