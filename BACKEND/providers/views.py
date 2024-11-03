from django.shortcuts import render
from .models import *

# Create your views here.
def all_providers(request):
    data_providers = provider.objects.all()
    context = {
        "providers": data_providers
    }
    if request.headers.get('HX-Request'):
        return render(request,'partials/providers.html',context=context)
    else:
        return render(request, 'providers.html', context=context)


def get_provider(request,id):
    pass
