from django.core import serializers
from rest_framework import  serializers
from .models import CustomUser,Hospitalform,Donorprofile, DonorFillingForm

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=("id","first_name","last_name","email","password")
        extra_fields ={"password":{"write_only":True}}
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
        fields=("id","hospital_name","contact_number","hospital_email","location","password") 
        extra_fields={"password":{"write_only":True}}

    def create(self,validated_data):
        password=validated_data.pop("password")
        hospital=self.Meta.model(**validated_data)
        hospital.set_password(password)
        hospital.save()
        return hospital
    
    
    
class HospitalLoginSerializer(serializers.Serializer):
    hospital_email=serializers.EmailField()
    password=serializers.CharField(max_length=30)
    
    
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Donorprofile 
        fields=("id","occupation","phonenumber","address","birthday","owner")
        
    
    
class  FormSerializer(serializers.ModelSerializer):
    class Meta:
        model=DonorFillingForm
        fields=("id","weight","Last_date_donating","owner")
    