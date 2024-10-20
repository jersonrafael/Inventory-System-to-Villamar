from django.urls import path,include
from .views import *
urlpatterns = [
    path('', index, name='index'),

    path('home/', home_view, name='home'),

    path('products/', products, name='products'),
    
    path('product/add/', add_product, name='add_product'),    

    path('configuration/',panel_configuration , name='configuration')      
]