from django.shortcuts import render,get_object_or_404,redirect
from .models import *

from django.contrib.auth.decorators import login_required
from .common import *

orm = ORM()


@login_required
def home_view(request):

    if request.headers.get('HX-Request'):
        return render(request, 'sections/partials/partial_home.html')
    else:
        return render(request, 'sections/home.html')

@login_required
def products(request):
    orm_actions = orm.getAll(product)
    context = {
        "products": orm_actions
    }

    if request.headers.get('HX-Request'):
        return render(request, 'sections/partials/partial_products.html', context=context)
    else:
        return render(request, 'sections/products.html', context=context)
    
@login_required
def get_product(request,pk):
    model= orm.get(product,pk)
    context = {
        "product":model
    }

    if request.headers.get('HX-Request'):
        return render(request, 'sections/partials/partial_product.html', context=context)
    else:
        return render(request, 'sections/product.html', context=context)


@login_required
def add_product(request):
    context = {
        "partial_mode": False
    }

    if request.headers.get('HX-Request'):
        context['partial_mode'] = True
    else:
        context['partial_mode'] = False
    
    if request.method == "POST":
        product_data = {
        "name":request.get["name"],
        "price":request.get["price"],
        "code":request.get["code"],
        }
        model = orm.create(product,product_data)
        return redirect('products')
    return render(request, 'sections/add_product.html', context=context)

@login_required
def edit_product(request,pk):
    model = get_object_or_404(product, pk=pk)
    context ={
        "product":model
    }
    return render(request, 'sections/edit_product.html', context=context)