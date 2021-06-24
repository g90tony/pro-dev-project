from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

##the urls below were created to test jwt-auth on different APIView requests
##they are not meant to be the final (app)urlpatterns for the project
urlpatterns = [
    #path('hello/', views.HelloView.as_view(), name='hello'),
    path('api/manyusers/', views.ManyCreativeUsers.as_view(), name='hello'),
    path('api/singleusers/', views.SingleCreativeUsers.as_view(), name='hello'),
    path('api/profile/', views.CreativeProfile.as_view(), name='hello'),
    path('api/booking/', views.CreateBooking.as_view(), name='hello'),
    path('api/review/', views.CreateReview.as_view(), name='hello'),

    #StudioUser
    path('api/StudioUser/', views.StudioUserList.as_view(), name='StudioUser'),
    path('api/StudioUser/update/<int:pk>/',views.IndividualStudioUser.as_view()),
    path('api/StudioUser/delete/<int:pk>/',views.IndividualStudioUser.as_view()),

    #AdvertPost
    path('api/advertpost/', views.AdvertPostList.as_view(), name='AdvertPost'),
    path('api/advertpost/update/<int:pk>/',views.IndividualAdvertPost.as_view()),
    path('api/advertpost/delete/<int:pk>/',views.IndividualAdvertPost.as_view()),

    #Services
    path('api/services/', views.ServicesList.as_view(), name='Services'),
    path('api/services/update/<int:pk>/',views.IndividualServices.as_view()),
    path('api/services/delete/<int:pk>/',views.IndividualServices.as_view()),

    #StudioProfile
    path('api/studioprofile/', views.StudioProfileList.as_view()),
    path('api/studioprofile/update/<int:pk>/',views.IndividualStudioProfile.as_view()),
    path('api/studioprofile/delete/<int:pk>/',views.IndividualStudioProfile.as_view()),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)