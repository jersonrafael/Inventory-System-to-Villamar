from django.shortcuts import render
from .serializers import *
from .models import *

# Create your views here.
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response

class productViewset(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = product.objects.all()


class getProduct(APIView):
    def get(self,request,name):
        queryset = product.objects.filter(name__startswith=name)
        serializers_class = ProductSerializer(queryset,many=True)
        return Response(serializers_class.data)