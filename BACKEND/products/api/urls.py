from .views import *
from rest_framework.routers import DefaultRouter
from django.urls import path,include

router = DefaultRouter()
router.register(r'product', productViewset, basename='product')

urlpatterns = [
    path('product/', include([
        path('<int:id>/', getProductById.as_view(), name='getproductbyid'),
        path('<str:name>/', getProductByName.as_view(), name='get product'),
    ])),
    path('test/', testUpdate.as_view()),
    path('', include(router.urls)),
]


# urlpatterns += router.urls