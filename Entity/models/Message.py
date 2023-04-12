from django.db import models
from .User import User
class Message(models.Model):
    UserIDSend = models.ForeignKey(User, on_delete= models.CASCADE,related_name='sent_messages')
   
    Time = models.TimeField()
    Content = models.CharField(max_length=255)