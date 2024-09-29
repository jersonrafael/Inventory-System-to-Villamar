from django.shortcuts import render

from .models import *


def index(request):
    products = product.objects.all()
    context = {
        "products": products
    }
    return render(request, 'home.html', context=context)

def add_product(request):
    
    return render(request, 'add_product.html', context={})