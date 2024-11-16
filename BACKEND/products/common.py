from django.shortcuts import get_object_or_404
from .models import *

class ORM():
    def create(self,model, **kargs):
        passedData = {
            "model":model,
            "Model data":kargs
        }
        return passedData
        # new_object = model(**kargs)
        # new_object.save()
        # return new_object

    def delete(self,model, pk):
        get_model = get_object_or_404(model,pk=pk)
        if get_model != None:
            model = get_model.delete()

    def getAll(self,data_model):
        return data_model.objects.all()

    def get(self,model,pk):
        return get_object_or_404(model, pk=pk)
        
            