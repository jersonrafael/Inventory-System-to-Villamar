from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from .models import *


@login_required
def index(request):
    context = {

    }
    return render(request, 'base.html', context=context)

@login_required
def home(request):
    return render(request, 'home.html')

@login_required
def products(request):
    products = product.objects.all()
    context = {
        "products": products
    }
    return render(request, 'products.html', context=context)