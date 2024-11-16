from django.shortcuts import render
from django.views import View
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required
def index(request):
    context = {

    }
    return render(request, 'panel_home.html', context=context)


@login_required
def panel_configuration(request):
    model= None
    context= {

    }
    return render(request, 'sections/configuration.html', context=context)
