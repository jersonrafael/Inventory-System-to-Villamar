from django.db import models

# Create your models here.
class provider(models.Model):
    name = models.CharField(max_length=255)
    direction = models.TextField()
    contact = models.TextField()
    provider_status = models.BooleanField(default=True)
    provider_added = models.DateTimeField(auto_now=True)
    
    def __str__(self) -> str:
        return f"{self.name}"