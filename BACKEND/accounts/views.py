from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout


def loginUser(request):
    if(request.method == 'POST'):
        username = request.POST["username"]
        password= request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            redirect('accounts/login')
    else:
        return render(request, 'login.html')


def closeaccount(request):
    logout(request)
    return redirect('/')