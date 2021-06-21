from django.urls import path
from studioapp import views

urlpatterns = [
    #path('hello/', views.HelloView.as_view(), name='hello'),
    path('api/manyusers/', views.ManyCreativeUsers.as_view(), name='hello'),
    path('api/singleusers', views.SingleCreativeUsers.as_view(), name='hello'),
    path('api/profile', views.CreativeProfile.as_view(), name='hello'),
    path('api/booking', views.CreateBooking.as_view(), name='hello'),
    path('api/review', views.CreateReview.as_view(), name='hello'),



]