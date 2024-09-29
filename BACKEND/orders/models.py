from django.db import models
from products.models import *
from providers.models import provider

# Create your models here.
class order(models.Model):
    provider = models.ForeignKey(provider, on_delete=models.CASCADE, default=None)
    products = models.ForeignKey(product,on_delete=models.CASCADE, default=None)
    units = models.CharField(max_length=255)
    quantitys = models.IntegerField(default=0)
    taxes = models.IntegerField(default=0)
    observations = models.TextField()
    creation = models.DateTimeField(auto_now=True)
    
    def __str__(self) -> str:
        return f"{self.product}"