from django.shortcuts import render
from .serializers import *
from products.models import *

from rest_framework_simplejwt.tokens import AccessToken


# Create your views here.
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status

from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework_simplejwt.authentication import JWTAuthentication


class productViewset(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = product.objects.all()


@permission_classes([IsAuthenticated])
class getProductByName(APIView):
    def get(self, request, name):
        queryset = product.objects.filter(name__startswith=name)
        getUser = print(request.user)
        serializers_class = ProductSerializer(queryset, many=True)
        return Response(serializers_class.data)


class getProductById(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, id):
        print(request.headers)
        queryset = get_object_or_404(product, pk=id)
        serializers_class = ProductSerializer(queryset, many=False)
        return Response(serializers_class.data)

    def put(self, request, id):
        query = get_object_or_404(product, pk=id)
        serializer = ProductSerializer(query, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg": "Product Updated!", "data": serializer.data}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class testUpdate(APIView):
    def get(self, request):
        print("Test")
        return Response({"message": "Succesfull"}, status=status.HTTP_200_OK)
