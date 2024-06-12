from django.contrib import admin
from .models import CustomUser,Hospitalform,Donorprofile
# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Hospitalform)
admin.site.register(Donorprofile)
