from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from .models import *


@login_required
def index(request):
    context = {

    }
    return render(request, 'base.html', context=context)

@login_required
def panel_configuration(request):
    model= None
    context= {

    }
    return render(request, 'sections/configuration.html', context=context)

@login_required
def home_view(request):
    return render(request, 'sections/home.html')

@login_required
def products(request):
    products = product.objects.all()
    context = {
        "products": products
    }
    return render(request, 'sections/products.html', context=context)

@login_required
def add_product(request):
    context = {
        
    }
    return render(request, 'sections/add_product.html', context=context)