from django.urls import path
from studioapp import views


urlpatterns = [
    #path('hello/', views.HelloView.as_view(), name='hello'),
    path('api/manyusers/', views.ManyCreativeUsers.as_view(), name='manyusers'),
    path('api/singleusers/', views.SingleCreativeUsers.as_view(), name='singleusers'),
    path('api/profile/', views.CreativeProfile.as_view(), name='profile'),
    path('api/booking/', views.CreateBooking.as_view(), name='booking'),
    path('api/review/', views.CreateReview.as_view(), name='review'),
    path('api/signup/', views.RegistrationAPIView.as_view()),
    path('api/login/', views.LoginAPIView.as_view()),
    path('api/updateuser/', views.UserRetrieveUpdateAPIView.as_view()),

]