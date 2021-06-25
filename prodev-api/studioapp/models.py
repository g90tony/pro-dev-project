from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser,AbstractBaseUser,BaseUserManager, PermissionsMixin
from django.conf import settings
from datetime import datetime, timedelta
import jwt



## This is a Manager for the CreativeUser model.
# It is a requirement by django when creating a custom user model
# the custom user model is CreativeUser
class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None):
        """Create and return a `User` with an email, username and password."""
        if username is None:
            raise TypeError('Users must have a username.')

        if email is None:
            raise TypeError('Users must have an email address.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError('Superusers must have a password.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user

#CREATIVES
# This is the custom user model that will handle all users and their authentication
# I have also created a custom manager above for the user-model CreativeUser


class User(PermissionsMixin, AbstractBaseUser):

    USER_TYPE_CHOICES = (
        (1, 'studiouser'),
        (2, 'creativeuser')
    )

    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(unique=True)
    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, default=2)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    

    def __str__(self):
        return self.email

    @property
    def token(self):
        """
        Allows us to get a user's token by calling `user.token` instead of
        `user.generate_jwt_token().

        The `@property` decorator above makes this possible. `token` is called
        a "dynamic property".
        """
        return self._generate_jwt_token()

    def get_full_name(self):
        return self.username

    def _generate_jwt_token(self):
        """
        Generates a JSON Web Token that stores this user's ID and has an expiry
        date set to 60 days into the future.
        """
        dt = datetime.now() + timedelta(days=60)

        token = jwt.encode({
            'id': self.pk,
            'exp': dt.utcfromtimestamp(dt.timestamp())
        }, settings.SECRET_KEY, algorithm='HS256')
        return token.decode('utf-8')

   

#STUDIO
# custom user model handles all auth
# thus omitting repeated code

'''
class StudioUser(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    email = models.EmailField()

    @classmethod
    def search_by_username(cls, search_term):
        name = cls.objects.filter(username__icontains = search_term)
        return name

    def save_StudioUser(self):
        self.save()

    def delete_StudioUser(self):
        self.delete()

    def __str__(self):
        return self.username
'''


#Posting adverts
class AdvertPost(models.Model):
    studio_id = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE, default=1)
    advert_photos = models.ImageField(upload_to="images")
    caption = models.CharField(max_length=100)

    def save_post(self):
        self.save()

    def delete_post(self):
        self.delete()

    def __str__(self):
        return self.studio_id.username

#Services offered by studio
class Services(models.Model):
    name = models.CharField(max_length=30)

    def save_services(self):
        self.save()

    def delete_services(self):
        self.delete()

    def __str__(self):
        return self.name

class StudioProfile(models.Model):
    studio_id = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
    location = models.CharField(max_length=30)
    
    #service_provided = models.ForeignKey(Services,on_delete=models.CASCADE)
    #advert_photos = models.ForeignKey(AdvertPost,on_delete=models.CASCADE)
    logo = models.ImageField(upload_to="images")

    #rates = models.DecimalField(decimal_places=2, max_digits=8)
'''
    @receiver(post_save, sender=settings.AUTH_USER_MODEL)
    def create_studio_profile(sender, instance, created, **kwargs):
        if created:
            StudioProfile.objects.create(studio_id=instance)

    @receiver(post_save, sender=settings.AUTH_USER_MODEL)
    def save_studio_profile(sender, instance, **kwargs):
        instance.StudioProfile.save()

    def __str__(self):
        return self.studio_id.username

'''



class CreativeProfile(models.Model):
    creative_id = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to="images")
    bio = models.CharField(max_length=100)
'''
    @receiver(post_save, sender=settings.AUTH_USER_MODEL)
    def create_creative_profile(sender, instance, created, **kwargs):
        if created:
            pass
            #CreativeProfile.objects.create(user_id=instance)

    @receiver(post_save, sender=settings.AUTH_USER_MODEL)
    def save_creative_profile(sender, instance, **kwargs):
        instance.CreativeProfile.save()

    def __str__(self):
        return self.creative_id.username
'''
#Review of Studios
class Review(models.Model):
    message = models.CharField(max_length=100)
    creative_id = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)

    def save_review(self):
        self.save()

    def delete_review(self):
        self.delete()

    def __str__(self):
        return self.creative_id.username

#Creatives booking Studio time
class Booking(models.Model):
    creative_id = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    #studio_id = models.ForeignKey(StudioProfile,on_delete=models.CASCADE)
    email =  models.EmailField()
    session_duration = models.DurationField()
    session_time = models.DateTimeField()

    def save_booking(self):
        self.save()

    def delete_booking(self):
        self.delete()

    def __str__(self):
        return self.creative_id.username

