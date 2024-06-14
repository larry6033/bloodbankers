from django.contrib import admin
from .models import CustomUser,Hospitalform,Donorprofile,DonorFillingForm
# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Hospitalform)
admin.site.register(Donorprofile)
admin.site.register(DonorFillingForm)
