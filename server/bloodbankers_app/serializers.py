from django.core import serializers
from rest_framework import  serializers
from .models import CustomUser,Hospitalform,Donorprofile

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=("id","first_name","last_name","email","password")
        extra_kwargs={"password":{"write_only":True}}
    def create(self,validated_data):
        password=validated_data.pop("password")
        user=self.Meta.model(**validated_data)
        user.set_password(password)
        user.save()
        return user
    
    


class UserLoginSerializer(serializers.Serializer):
    email=serializers.EmailField()
    password=serializers.CharField(max_length=30)
    
    
class Registerhospitalserializer(serializers.ModelSerializer):
    class Meta:
        model=Hospitalform   
        fields=("id",'hospital_name',"contact_number",'hospital_email',"location") 
    def create(self,validated_data):
        user=self.Meta.model(**validated_data)
        password=validated_data.pop("password")
        user.set_password(password)
        user.save()
        return user    
    
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Donorprofile
        fields=("id","user","subscription_plan")
        
    