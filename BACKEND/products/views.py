from django.shortcuts import render
from .models import *
def index(request):
    products = product.objects.all()
    context = {
        "products": products
    }
    return render(request, 'home.html', context=context)