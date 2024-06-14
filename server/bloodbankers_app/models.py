from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

# Create your models here.



class CustomUserManager(BaseUserManager):
    def create_user(self,email,password=None,**extra_fields):
        if not email:
            raise ValueError("Email field required")
        else:
            email=self.normalize_email(email)    
            user = self.model(email=email,**extra_fields)
            user.set_password(password)
            user.save(using=self_db)

    def create_superuser(self,email,password=None,**extra_fields):
        extra_fields.setdefault("is_staff",True)
        extra_fields.setdefault("is_superuser",True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError("super user must have is_staff set to True")   
    
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("super user must have is_superuser set to True")   
        return self.create_user(email,password,**extra_fields)   




class CustomUser(AbstractBaseUser): 
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    email=models.EmailField(max_length=200,blank=True,null=True,unique=True)
    # is_staff=models.BooleanField(True)
    is_active=models.BooleanField(default=True)
    

    objects=CustomUserManager()
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=["first_name","last_name"]

    def __str__(self):
        return self.first_name


class Hospitalform(AbstractBaseUser): 
    hospital_name=models.CharField(max_length=100)
    contact_number=models.IntegerField()
    hospital_email=models.EmailField(max_length=200,blank=True,null=True,unique=True)
    location=models.TextField(blank=True,null=True)
    
    objects=CustomUserManager()
    USERNAME_FIELD='hospital_email'
    REQUIRED_FIELDS=["hospital_email","password"]


    def __str__(self):
        return self.hospital_name


class Donorprofile(models.Model):
    # first_name=models.CharField(max_length=50)
    # last_name=models.CharField(max_length=50)
    # email=models.EmailField(max_length=200,blank=True,null=True,unique=True)
    phonenumber=models.IntegerField()
    occupation=models.CharField(max_length=200)
    address=models.TextField(blank=True,null=True)
    birthday=models.DateField(blank=True,null=True)
    owner=models.ForeignKey(CustomUser,on_delete=models.CASCADE,default=None)

    def __str__(self):
        return f"{self.owner.first_name}'s donation details"


class DonorFillingForm(models.Model):
    Last_date_donating=models.DateField(blank=True,null=True)
    weight=models.IntegerField()
    owner=models.ForeignKey(Donorprofile,on_delete=models.CASCADE,default=None)

    def __str__(self):
        return f"{self.owner.first_name}'s donation details"