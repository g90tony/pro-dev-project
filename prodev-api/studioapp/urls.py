from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    # Authentication routes
    path("api/user/register", views.RegistrationAPIView.as_view(), name="user_register"),
    path("api/user/login", views.LoginAPIView.as_view(), name="user_login"),
    # client profile
    path("api/client-user/profile/", views.CreativeProfile.as_view(), name="multi_profile_crud"),
    path("api/client-user/profile/<int:profile_id>", views.CreativeProfile.as_view(), name="profile_crud"),
    # booking
    path("api/client-user/create-booking/", views.CreateBooking.as_view(), name="make_booking"),
    # reviews
    path("api/client-user/add-review/<int:studio_id>", views.CreateReview.as_view(), name="make_reviews"),
    # path examples:
    #  http://127.0.0.1:8000/api/services/ --> to view all items
    #  http://127.0.0.1:8000/api/services/update/1/ --> to update specific item
    #  http://127.0.0.1:8000/api/services/delete/1/ --> to delete specific item
    # StudioUser
    path("api/studio-user/", views.StudioUserList.as_view(), name="StudioUser"),
    path("api/studio-user/<int:pk>/", views.IndividualStudioUser.as_view()),
    path("api/studio-user/update/<int:pk>/", views.IndividualStudioUser.as_view()),
    path("api/studio-user/delete/<int:pk>/", views.IndividualStudioUser.as_view()),
    # AdvertPost
    path("api/advert-post/", views.AdvertPostList.as_view(), name="AdvertPost"),
    path("api/advert-post/<int:pk>/", views.IndividualAdvertPost.as_view()),
    path("api/advert-post/update/<int:pk>/", views.IndividualAdvertPost.as_view()),
    path("api/advert-post/delete/<int:pk>/", views.IndividualAdvertPost.as_view()),
    # Services
    path("api/services/", views.ServicesList.as_view(), name="Services"),
    path("api/services/<int:pk>/", views.IndividualServices.as_view()),
    path("api/services/update/<int:pk>/", views.IndividualServices.as_view()),
    path("api/services/delete/<int:pk>/", views.IndividualServices.as_view()),
    # StudioProfile
    path("api/studio-user/profile/", views.StudioProfileList.as_view()),
    path("api/studio-user/profile/<int:pk>/", views.IndividualStudioProfile.as_view()),
    path("api/studio-user/profile/update/<int:pk>/", views.IndividualStudioProfile.as_view()),
    path("api/studio-user/profile/delete/<int:pk>/", views.IndividualStudioProfile.as_view()),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
