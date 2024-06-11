from django.urls import path
from .import views



urlpatterns=[
path('register/',views.UserRegisterationView.as_view(), name='register'),
path('login/',views.UserLoginView.as_view(), name='login'),
path('hospital/',views.HospitalRegistrationView.as_view(), name='hospitalform'),
path('donor/',views.DonorProfileView.as_view(), name='donorform'),

]