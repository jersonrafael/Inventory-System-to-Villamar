from django.db import models

# Create your models here.
class client(models.Model):
    name = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    identification = models.CharField(max_length=300)
    direction = models.CharField(max_length=255)
    client_date = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name
    