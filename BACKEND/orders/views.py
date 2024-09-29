from django.shortcuts import render

# Create your views here.
def get_orders(request):
    model = None
    context= {
        "orders":model
    }
    return render(request, 'orders.html', context=context)

def get_sales(request):
    model = None
    context= {
        "sales":model
    }
    return render(request, 'sales.html', context=context)