from django.db import models

# Create your models here.
class UserModel(models.Model):
    fName = models.CharField(max_length=50,blank=True, null=True)
    lName = models.CharField(max_length=50,blank=True, null=True)
    fullName = models.CharField(max_length=100,blank=True, null=True)
    email = models.EmailField(max_length=254,blank=True, null=True)
    password = models.CharField(max_length=50,blank=True, null=True)
    mobNumber = models.CharField(max_length=50,blank=True, null=True)
    companySize = models.CharField(max_length=50,blank=True, null=True)
    role = models.CharField(max_length=50,blank=True, null=True)

