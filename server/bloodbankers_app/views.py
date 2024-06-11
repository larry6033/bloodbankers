from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
# from .models import 
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth.hashers import check_password
from django.contrib.auth import login
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import Http404
from .serializers import RegisterSerializer,UserLoginSerializer,Registerhospitalserializer,ProfileSerializer
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

    def post(self,request,format=None):
        serializer=Registerhospitalserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    



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
                    # print(refresh)
                    access_token=refresh.access_token
                    # print(access_token)
                    login(request,user)
                    return Response({"refresh_token":str(refresh),"access_token":str(access_token)},status=status.HTTP_200_OK)
                else:
                    return Response({"message":"password error"},status=status.HTTP_401_UNAUTHORIZED)   
            else:
                return Response({"message":"No user with that email address"},status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)        
