from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    #path('hello/', views.HelloView.as_view(), name='hello'),
    path('api/client-user/', views.ManyCreativeUsers.as_view(), name='hello'),
    path('api/client-user/<int:user_id>', views.SingleCreativeUsers.as_view(), name='hello'),
    path('api/client-user/profile/<int:profile_id>', views.CreativeProfile.as_view(), name='hello'),
    path('api/client-user/create-booking/', views.CreateBooking.as_view(), name='hello'),
    path('api/client-user/add-review/', views.CreateReview.as_view(), name='hello'),

   # path examples:
   #  http://127.0.0.1:8000/api/services/ --> to view all items
   #  http://127.0.0.1:8000/api/services/update/1/ --> to update specific item
   #  http://127.0.0.1:8000/api/services/delete/1/ --> to delete specific item


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
