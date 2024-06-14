from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from .models import CustomUser,Donorprofile,Hospitalform,DonorFillingForm
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth.hashers import check_password
from django.contrib.auth import login
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import Http404
from .serializers import RegisterSerializer,UserLoginSerializer,Registerhospitalserializer,ProfileSerializer, FormSerializer,HospitalLoginSerializer
# from serializers import 

# Create your views here.


class UserRegisterationView(APIView):
    def post(self,request,format=None):
        serializer=RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    


class HospitalRegistrationView(APIView):
    def post(self,request,format=None):
        serializer=Registerhospitalserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    


class DonorProfileView(APIView):
    permission_classes=[IsAuthenticated]

    def post(self,request,format=None):
        serializer=ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    



class DonorView(APIView):
    permission_classes=[IsAuthenticated]
    
    def get(self,request,format=None):
        # all_contacts=Contact.objects.all()
        all_donors=Donorprofile.objects.filter(owner=request.user.id)

        serializer=ProfileSerializer(all_donors, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        data=request.data.copy()
        data['owner']=request.user.id
        
        serializer=ProfileSerializer(data=data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    

    def get_single_donor(self, id):
        try:
            donor=Donorprofile.objects.get(id=id)
            return contact
        except donor.DoesNotExist:
            raise Http404    
        
    def get(self, request, id, format=None):
        single_donor=self.get_single_donor(id)
        serializer=ProfileSerializer(single_donor)
        return Response(serializer.data)
    
    def put(self, request, id, format=None):
        single_donor=self.get_single_donor(id)
        serializer=ProfileSerializer(single_donor, request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, id, format=None):
        single_donor=self.get_single_donor(id)
        single_donor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
class DonorFormView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self, request, format=None):
        data=request.data.copy()
        data['owner']=request.user.id
        
   
        serializer=FormSerializer(data=data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    

class Donors(APIView):
    # permission_classes=[IsAuthenticated]
    def get(self,request,format=None):
        all_donors=DonorFillingForm.objects.all()
        serializer=FormSerializer(all_donors, many=True)
        return Response(serializer.data)
    
    # def get(self,request,format=None):
    #     # all_contacts=Contact.objects.all()
    #     all_donors=DonorFillingForm.objects.filter(owner=request.user.id)

    #     serializer=FormSerializer(all_donors, many=True)
    #     return Response(serializer.data)


class SingleDonorView(APIView):
    permission_classes=[IsAuthenticated]
    
    def get_single_donor(self, id):
        try:
            donor=Donorprofile.objects.get(id=id)
            return contact
        except donor.DoesNotExist:
            raise Http404    
        
    def get(self, request, id, format=None):
        single_donor=self.get_single_donor(id)
        serializer=ProfileSerializer(single_donor)
        return Response(serializer.data)
    
    def put(self, request, id, format=None):
        single_donor=self.get_single_donor(id)
        serializer=ProfileSerializer(single_donor, request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, id, format=None):
        single_donor=self.get_single_donor(id)
        single_donor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    

class DonorForm(APIView):
     def post(self, request, format=None):
        data=request.data.copy()
        data['owner']=request.user.id
        
        serializer=ProfileSerializer(data=data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    

class HospitalLoginView(APIView):
    def post(self,request,format=None):
       
        serializer=HospitalLoginSerializer(data=request.data)
        if serializer.is_valid():
            email=serializer.validated_data.get("hospital_email")
            password=serializer.validated_data.get("password")
            try:
                hospital=Hospitalform.objects.get(hospital_email=email)
                print(hospital)
            except Hospitalform.DoesNotExist:
                hospital=None   
            if hospital is not None:
                if check_password(password,hospital.password):
                    refresh= RefreshToken.for_user(hospital)
                    print(refresh)
                    access_token=refresh.access_token
                    print(access_token)
                    login(request,hospital)
                    return Response({"refresh_token":str(refresh),"access_token":str(access_token)},status=status.HTTP_200_OK)
                else:
                    return Response({"message":"password error"},status=status.HTTP_401_UNAUTHORIZED)   
            else:
                return Response({"message":"No hospital with that email address"},status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)        


class UserLoginView(APIView):
    def post(self,request,format=None):
       
        serializer=UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            email=serializer.validated_data.get("email")
            password=serializer.validated_data.get("password")
            try:
                user=CustomUser.objects.get(email=email)
            except CustomUser.DoesNotExist:
                user=None
            if user is not None:
                if check_password(password,user.password):
                    refresh= RefreshToken.for_user(user)
                    print(refresh)
                    access_token=refresh.access_token
                    print(access_token)
                    login(request,user)
                    return Response({"refresh_token":str(refresh),"access_token":str(access_token)},status=status.HTTP_200_OK)
                else:
                    return Response({"message":"password error"},status=status.HTTP_401_UNAUTHORIZED)   
            else:
                return Response({"message":"No user with that email address"},status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)        
