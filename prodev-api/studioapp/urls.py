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



]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)