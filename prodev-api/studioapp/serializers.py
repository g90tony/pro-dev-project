from rest_framework import serializers
from .models import StudioUser, AdvertPost, Services, StudioProfile, CreativeUser, CreativeProfile, Review, Booking
from django import forms

#Studio
class StudioUserSerializer(serializers.ModelSerializer):
    email = forms.EmailField(max_length=254, help_text='Required. Enter a valid email address.')
    class Meta:
        model = StudioUser
        fields = '__all__'

class AdvertPostSerializer(serializers.ModelSerializer):
    studio_id = StudioUserSerializer
    class Meta:
        model = AdvertPost
        fields = '__all__'

class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = '__all__'

class StudioProfileSerializer(serializers.ModelSerializer):
    studio_id = StudioUserSerializer
    service_provided = ServicesSerializer
    advert_photos = AdvertPostSerializer
    class Meta:
        model = StudioProfile
        fields = '__all__'

#Creatives
class CreativeUserSerializer(serializers.ModelSerializer):
    email = forms.EmailField(max_length=254, help_text='Required. Enter a valid email address.')
    class Meta:
        model = CreativeUser
        fields = '__all__'

class CreativeProfileSerializer(serializers.ModelSerializer):
    creative_id = CreativeUserSerializer
    class Meta:
        model = CreativeProfile
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    creative_id = CreativeUserSerializer
    class Meta:
        model = Review
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    creative_id = CreativeUserSerializer
    class Meta:
        model = Booking
        fields = '__all__'