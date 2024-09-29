from django.shortcuts import render

# Create your views here.
def providers(request):
    return render(request,'providers.html')