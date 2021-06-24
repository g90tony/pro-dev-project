from rest_framework import serializers
from .models import AdvertPost, Services, StudioProfile, CreativeProfile, Review, Booking, User
from django import forms
from django.contrib.auth import authenticate


#Studio


class UserSerializer(serializers.ModelSerializer):
    #user objects
    email = forms.EmailField(max_length=254, help_text='Required. Enter a valid email address.')
    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'user_type' ,'token']


class AdvertPostSerializer(serializers.ModelSerializer):
    studio_id = UserSerializer
    class Meta:
        model = AdvertPost
        fields = '__all__'

class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = '__all__'

class StudioProfileSerializer(serializers.ModelSerializer):
    studio_id = UserSerializer
    service_provided = ServicesSerializer
    advert_photos = AdvertPostSerializer
    class Meta:
        model = StudioProfile
        fields = '__all__'

#Creatives
#serializer

class CreativeUserSerializer(serializers.ModelSerializer):
    email = forms.EmailField(max_length=254, help_text='Required. Enter a valid email address.')
    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'user_type' ,'token']


class CreativeProfileSerializer(serializers.ModelSerializer):
    creative_id = UserSerializer
    class Meta:
        model = User
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
        fields = ['email', 'username', 'password', 'user_type' ,'token']

    def create(self, validated_data):
        # Use the `create_user` method we wrote earlier to create a new user.
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=255)
    username = serializers.CharField(max_length=255, read_only=True)
    password = serializers.CharField(max_length=128, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)
    user_type = serializers.IntegerField(read_only=True)
    
    def validate(self, data):
        # The `validate` method is where we make sure that the current
        # instance of `LoginSerializer` has "valid". In the case of logging a
        # user in, this means validating that they've provided an email
        # and password and that this combination matches one of the users in
        # our database.
        email = data.get('email', None)
        password = data.get('password', None)
        user_type = data.get('user_type', None)

        if email is None:
            raise serializers.ValidationError(
                'An email address is required to log in.'
            )

        if password is None:
            raise serializers.ValidationError(
                'A password is required to log in.'
            )

        user = authenticate(username=email, password=password, user_type=user_type)
        if user is None:
            raise serializers.ValidationError(
                'A user with this email and password was not found.'
            )

        # Django provides a flag on our `User` model called `is_active` to check if user is deactivated.
        if not user.is_active:
            raise serializers.ValidationError(
                'This user has been deactivated.'
            )

        return {
            'email': user.email,
            'username': user.username,
            'user_type': user.user_type,
            'token': user.token
        }


class UserSerializer(serializers.ModelSerializer):
    """Handles serialization of User objects."""
    password = serializers.CharField(
        max_length=128,
        min_length=8,
        write_only=True
    )

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'token',)

        read_only_fields = ('token',)


    def update(self, instance, validated_data):
        """Performs an update on a User."""
        password = validated_data.pop('password', None)

        for (key, value) in validated_data.items():
            setattr(instance, key, value)

        if password is not None:
            instance.set_password(password)
        instance.save()

        return instance