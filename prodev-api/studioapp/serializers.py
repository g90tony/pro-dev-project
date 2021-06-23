from rest_framework import serializers
from .models import StudioUser, AdvertPost, Services, StudioProfile, CreativeUser, CreativeProfile, Review, Booking, User
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

class RegistrationSerializer(serializers.ModelSerializer):
    """Serializers registration requests and creates a new user."""

    # Ensure passwords are at least 8 characters long, no longer than 128
    # characters, and can not be read by the client.
    password = serializers.CharField(
        max_length=128,
        min_length=8,
        write_only=True
    )

    # The client should not be able to send a token along with a registration
    # request. Making `token` read-only handles that for us.
    token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = User
        # List all of the fields that could possibly be included in a request
        # or response, including fields specified explicitly above.
        fields = ['email', 'username', 'password', 'token']

    def create(self, validated_data):
        # Use the `create_user` method we wrote earlier to create a new user.
        return User.objects.create_user(**validated_data)