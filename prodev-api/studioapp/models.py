from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save

# Create your models here.

#STUDIO
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

#Posting adverts
class AdvertPost(models.Model):
    studio_id = models.ForeignKey(StudioUser,on_delete=models.CASCADE)
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
    studio_id = models.ForeignKey(StudioUser,on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
    location = models.CharField(max_length=30)
    rates = models.DecimalField(decimal_places=2)
    service_provided = models.ForeignKey(Services,on_delete=models.CASCADE)
    advert_photos = models.ForeignKey(AdvertPost,on_delete=models.CASCADE)
    logo = models.ImageField(upload_to="images")

    @receiver(post_save, sender=StudioUser)
    def create_studio_profile(sender, instance, created, **kwargs):
        if created:
            StudioProfile.objects.create(studio_id=instance)

    @receiver(post_save, sender=StudioUser)
    def save_studio_profile(sender, instance, **kwargs):
        instance.StudioProfile.save()

    def __str__(self):
        return self.studio_id.username



#CREATIVES
class CreativeUser(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    email = models.EmailField()

    def save_CreativeUser(self):
        self.save()

    def delete_CreativeUser(self):
        self.delete()

    def __str__(self):
        return self.username

class CreativeProfile(models.Model):
    creative_id = models.ForeignKey(CreativeUser,on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to="images")
    bio = models.CharField(max_length=100)

    @receiver(post_save, sender=CreativeUser)
    def create_creative_profile(sender, instance, created, **kwargs):
        if created:
            CreativeProfile.objects.create(user_id=instance)

    @receiver(post_save, sender=CreativeUser)
    def save_creative_profile(sender, instance, **kwargs):
        instance.CreativeProfile.save()

    def __str__(self):
        return self.creative_id.username

#Review of Studios
class Review(models.Model):
    message = models.CharField(max_length=100)
    user_id = models.ForeignKey(CreativeUser,on_delete=models.CASCADE)

    def save_review(self):
        self.save()

    def delete_review(self):
        self.delete()

    def __str__(self):
        return self.user_id.username

#Creatives booking Studio time
class Booking(models.Model):
    creative_name = models.ForeignKey(CreativeUser,on_delete=models.CASCADE)
    studio_name = models.ForeignKey(StudioProfile,on_delete=models.CASCADE)
    email =  models.EmailField()
    session_duration = models.DurationField()
    session_time = models.DateTimeField()

    def save_booking(self):
        self.save()

    def delete_booking(self):
        self.delete()

    def __str__(self):
        return self.creative_name.username

