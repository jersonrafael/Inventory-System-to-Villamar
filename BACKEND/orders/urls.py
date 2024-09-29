from django.urls import path
from .views import *

urlpatterns = [
    path('orders/', get_orders ,name='orders'),
    path('sales/', get_sales ,name='sales'),
]
