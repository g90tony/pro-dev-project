from django.urls import path
from studioapp import views

##the urls below were created to test jwt-auth on different APIView requests
##they are not meant to be the final (app)urlpatterns for the project
urlpatterns = [
    #path('hello/', views.HelloView.as_view(), name='hello'),
    path('api/manyusers/', views.ManyCreativeUsers.as_view(), name='hello'),
    path('api/singleusers/', views.SingleCreativeUsers.as_view(), name='hello'),
    path('api/profile/', views.CreativeProfile.as_view(), name='hello'),
    path('api/booking/', views.CreateBooking.as_view(), name='hello'),
    path('api/review/', views.CreateReview.as_view(), name='hello'),
    path('api/signup/', views.RegistrationAPIView.as_view()),
    path('api/login/', views.LoginAPIView.as_view()),
    path('api/updateuser/', views.UserRetrieveUpdateAPIView.as_view()),

]