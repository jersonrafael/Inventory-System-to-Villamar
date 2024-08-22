from .views import *
from rest_framework.routers import DefaultRouter
from django.urls import path,include

router = DefaultRouter()
router.register(r'product', productViewset, basename='product')

urlpatterns = [
    path('product/<str:name>/', getProduct.as_view(), name='get product'),
    path('', include(router.urls)),
]


# urlpatterns += router.urls