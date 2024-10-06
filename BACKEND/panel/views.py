from django.shortcuts import render
from django.views import View

# Create your views here.
class panelView(View):
    model = None
    template_name = 'panel_home.html'
    
    def get(self,request):
        return render(request, self.template_name, {})