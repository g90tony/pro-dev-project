from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin
from core.settings import *


admin.site.register(settings.AUTH_USER_MODEL)
admin.site.register(User)
admin.site.register(StudioProfile)
admin.site.register(CreativeProfile)
admin.site.register(Booking)


# Register your models here.
