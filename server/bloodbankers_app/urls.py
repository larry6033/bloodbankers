from django.urls import path
from .import views



urlpatterns=[
path('register/',views.UserRegisterationView.as_view(), name='register'),

path('login/',views.UserLoginView.as_view(), name='login'),

path('hospitalform/',views.HospitalRegistrationView.as_view(), name='hospitalform'),

path('donor/',views.DonorView.as_view(), name='donor'),

path('singledonor/',views.SingleDonorView.as_view(), name='singledonor'),

]