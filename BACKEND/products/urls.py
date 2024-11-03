from django.urls import path,include
from .views import *
urlpatterns = [
    path('home/', home_view, name='home'),

    path('products/', products, name='products'),
    path('product/<int:pk>/', get_product, name='product'),
    path('product/add/', add_product, name='add_product'),
    path('product/<int:pk>/edit/', edit_product, name='edit_product'),    
]