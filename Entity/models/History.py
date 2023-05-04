from django.db import models
from .Product import Product
from .User import User
class History(models.Model):
    Product = models.ForeignKey(Product,on_delete=models.CASCADE)
    User = models.ForeignKey(User,on_delete=models.CASCADE)
    IsBuy = models.BooleanField(null=True)
    

