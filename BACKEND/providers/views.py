from django.shortcuts import render
from .models import *

# Create your views here.
def all_providers(request):
    data_providers = provider.objects.all()
    context = {
        "providers": data_providers
    }       
    return render(request,'providers.html',context=context)


def get_provider(request,id):
    pass
