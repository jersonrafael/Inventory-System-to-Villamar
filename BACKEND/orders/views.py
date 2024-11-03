from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required
def get_orders(request):
    model = None
    context= {
        "orders":model
    }

    if request.headers.get('HX-Request'):
        return render(request, 'partials/partial_orders.html', context=context)
    else:
        return render(request, 'orders.html', context=context)


def get_sales(request):
    model = None
    context= {
        "sales":model
    }
    return render(request, 'sales.html', context=context)
