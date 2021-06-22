from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin


admin.site.register(User)
admin.site.register(StudioProfile)
admin.site.register(CreativeProfile)
admin.site.register(Booking)


# Register your models here.
