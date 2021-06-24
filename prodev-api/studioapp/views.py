from os import stat
from django.http.response import Http404
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import serializers, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


from .models import AdvertPost, Booking, CreativeProfile, CreativeUser, Review, Services, StudioProfile, StudioUser
from .serializers import AdvertPostSerializer, BookingSerializer, CreativeProfileSerializer, CreativeUserSerializer, ReviewSerializer,  ServicesSerializer, StudioProfileSerializer, StudioUserSerializer

# Create your views here.
'''
    
NAME: ManyCreativeUsers API Routes
DESC: this API route that will handle multiple creative user routes like fetching,and creating creative user objects
ROUTE: /api/creative/user

'''
class ManyCreativeUsers(APIView):
    permission_classes = (IsAuthenticated)
    def get(self, request, format=None ):
        all_creative_users = User.objects.all()
        
        serializers = CreativeUserSerializer(all_creative_users)
        
        return Response(serializers.data)
    
    def post(self, request, format=None):
        
        serializer = CreativeUserSerializer(request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response( serializer.data , status=status.HTTP_201_CREATED)    
        
        else:
            return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)
        
'''
    
NAME: SingleCreativeUsers API Routes
DESC: this API route that will handle single creative user routes like fetching, updating and deleting creative user objects 
ROUTE: /api/creative/user/<int:user_id>

'''
class SingleCreativeUsers(APIView):
    permission_classes = (IsAuthenticated)
    def get_user_object(self, pk):
        try:
            return CreativeUser.objects.get(id=pk)
        
        except:
            Http404
    
    def get(self, request, user_id, format=None):
        
        user_obj = self.get_user_object(user_id)
        
        serializer = CreativeUserSerializer(user_obj)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, user_id, format=None):
        
        user_obj =self.get_user_object(user_id)
        new_password = request.data.get("password")
        new_email = request.data.get("email")
        
        if (new_password and new_email):
            user_obj.password = new_password
            user_obj.email = new_email
            
        elif (new_email):
            user_obj.email = new_email
            
        elif (new_password):
            user_obj.password = new_password
        
        serializer = CreativeUserSerializer(user_obj, data=user_obj)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_200_OK)
        else: 
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     
        
    def delete(self, request, user_id, format=None):
        
        user_obj = self.get_user_object(user_id)
        
        try: 
            user_obj.delete()
            
            return Response(status=status.HTTP_200_OK)
        
        except:
            return Http404  
        

'''
    
NAME: CreativeProfile API Routes
DESC: this API route that will handle single creative profile routes like fetching, updating and deleting creative user objects 
ROUTE: /api/creative/profile/<int:user_id>

'''
class CreativeProfile(APIView):
    permission_classes = (IsAuthenticated)
    def get_profile_obj(user_id):
        
        try: 
            return CreativeProfile.objects.get(creative_id=user_id)
        
        except:
            
            return Http404
    
    def get(self, request, user_id, format=None):
        
        user_profile = self.get_profile_obj(user_id)
        
        serializer = CreativeProfileSerializer(user_profile)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    def post(self, request, user_id, format=None):
        
        profile_exists = self.get_profile_obj(user_id)
        
        if profile_exists:
            return Http404
        
        serializer = CreativeProfileSerializer(request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def patch(self, request, user_id, format=None):
        
        user_profile = self.get_profile_obj(user_id)
        new_avatar = request.get('avatar')
        new_bio = request.get('bio')
        
        if new_avatar and new_bio:
            user_profile.avatar = new_avatar
            user_profile.bio = new_bio
        
        elif new_avatar:
            user_profile.avatar = new_avatar
        
        elif new_bio:
            user_profile.bio = new_bio
            
        serializer = CreativeProfileSerializer(user_profile, data=user_profile)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, satus= status.HTTP_200_OK)
        
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, user_id, format=None ):
        
        user_profile = self.get_profile_obj(user_id)
        try: 
            user_profile.delete()
            
            return Response(status=status.HTTP_200_OK)
        
        except:
            return Http404

'''
    
NAME: CreativeProfile API Routes
DESC: this API route that will handle the create creative booking route 
ROUTE: /api/creative/book-session/

'''

class CreateBooking(APIView):
    permission_classes = (IsAuthenticated)
    def post(self, request, format=None):
       
       serializer = BookingSerializer(data=request.data)
       
       if serializer.is_valid():
           
           serializer.save()
           
           return Response(serializer.data, status=status.HTTP_201_CREATED)
       
       else:
           return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
       

'''
    
NAME: CreativeProfile API Routes
DESC: this API route that will handle the create creative booking route 
ROUTE: /api/creative/book-session/

'''
class CreateReview(APIView):
    permission_classes = (IsAuthenticated)
    def post(Self, request, format=None):
        
        serializer = ReviewSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 



#STUDIO VIEWS

#Studio User View
#Update and Delete individual entries
class IndividualStudioUser(APIView):
    serializer_class=StudioUserSerializer
    def get_SUser(self, pk):
        try:
            return StudioUser.objects.get(pk=pk)
        except StudioUser.DoesNotExist:
            return Http404()

    def get(self, request,pk,format=None):
        SUser = self.get_SUser(pk)
        serializers = self.serializer_class(SUser)
        return Response(serializers.data)

    def put(self, request, pk, format=None):
        SUser = self.get_SUser(pk)
        serializers = self.serializer_class(SUser, request.data)
        if serializers.is_valid():
            serializers.save()
            SUser_list = serializers.data
            response = {
                'data': {
                    'StudioUser': dict(SUser_list),
                    'status': 'success',
                    'message': 'Studio User updated successfully',
                }
            }
            return Response(response)
        else:
            return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, pk, format=None):
        SUser = self.get_SUser(pk)
        SUser.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#Add and View Entries
class StudioUserList(APIView):
    serializer_class=StudioUserSerializer
    def get(self, request, format=None):
        SUser=StudioUser.objects.all()
        serializers=self.serializer_class(SUser, many=True)
        return Response(serializers.data)

    def post(self, request, format=None):
        serializers=self.serializer_class(data=request.data)
        if serializers.is_valid():
            serializers.save()
            SUser=serializers.data
            response = {
                'data': {
                    'StudioUser': dict(SUser),
                    'status': 'success',
                    'message': 'Studio User created successfully',
                }
            }
            return Response(response, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request, format=None):
        SUser=StudioUser.objects.all()
        serializers=self.serializer_class(SUser, many=True)
        return Response(serializers.data)


