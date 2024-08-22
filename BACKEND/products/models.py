from django.db import models

# Create your models here.
class product(models.Model):
    name = models.CharField(max_length=255)
    code = models.IntegerField()
    price = models.FloatField()
    added_date = models.DateTimeField(auto_now=True,null=True,blank=True)
    expiration_date = models.DateTimeField(null=True,blank=True)
    avaliable = models.BooleanField(default=True)
