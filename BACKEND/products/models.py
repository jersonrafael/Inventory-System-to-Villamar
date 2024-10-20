from django.db import models
from clients.models import client
# Create your models here.

class product(models.Model):
    name = models.CharField(max_length=255)
    code = models.IntegerField()
    price = models.FloatField()
    added_date = models.DateTimeField(auto_now_add=True,null=True,blank=True)
    expiration_date = models.DateField(null=True,blank=True)
    avaliable = models.BooleanField(default=True)
    product_date = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.name}"

class sale(models.Model):
    client = models.ForeignKey(client, on_delete=models.CASCADE, default=None)
    product = models.ForeignKey(product, on_delete=models.CASCADE, default=None)
    units = models.CharField(max_length=255)
    quantity = models.IntegerField()
    sale_date = models.DateTimeField(auto_now=True)
    
    def __str__(self) -> str:
        return f"{self.client}"