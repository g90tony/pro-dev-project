from django.test import TestCase
from .models import *
from django.contrib.auth.models import User


class AdvertPostTestCase(TestCase):
    '''
    Test Class for AdvertPost Model
    '''
    def setUp(self):
        self.studio_user = StudioUser(username='jondoe123', email='jondoe123@gmail.com', password='123456')
        self.advert_one = AdvertPost(studio_user=self.studio_user,advert_photos='path/image.png', caption='Great team to work and interact with')
        
        
    def test_save_post(self):
        self.studio_user.save()
        self.advert_one.save()
        self.advert_one.save_post()
        adverts = AdvertPost.objects.all()
        self.assertTrue(len(adverts)>0)
    
    
    def test_delete_post(self):
        self.studio_user.save()
        self.advert_one.save_post()
        self.advert_one.delete_post()
        adverts = AdvertPost.objects.all()
        self.assertTrue(len(adverts)== 0)

class StudioProfileTestCase(TestCase):
    '''
    Test Class for Studio Model
    '''
    def setUp(self):
        self.service = Services(name='photography')
        self.studio_userr = StudioUser(username='jondoe123', email='jondoe123@gmail.com', password='123456')
        self.advert_oner = AdvertPost(studio_user=self.studio_userr,advert_photos='path/image.png', caption='Great team to work and interact with')
        self.studio_profile = StudioProfile(description='Commited to taking photos for your frames', location='Nairobi', rates='9000.00', logo='path/image.png',service_provided=self.service, studio_id=self.studio_userr,advert_photos=self.advert_oner)

        
    def test_save_studio(self):
        self.studio_userr.save()
        self.advert_oner.save()
        self.service.save()
        self.studio_profile.save_studio_profile()
        profiles = StudioProfile.objects.all()
        self.assertTrue(len(profiles)>0)

class StudioUserTestCase(TestCase):
    '''
    Test Class for Studio User Model
    '''
    def setUp(self):
        self.studiouserjon = StudioUser(username = 'jondoe', password = '12345678', email = 'jondooe@mail.com')
    
    def test_save_studiouserjon(self):
        self.studiouserjon.save()
        self.studiouserjon.save_StudioUser()
        userz = StudioUser.objects.all()
        self.assertTrue(len(userz)>0)

    def test_delete_studiouserjon(self):
        self.studiouserjon.save()
        self.studiouserjon.delete_StudioUser()
        user = StudioUser.objects.all()
        self.assertTrue(len(user)== 0)

class CreativeUserTestCase(TestCase):
    '''
    Test Class for Creative User Model
    '''
    def setUp(self):
        self.creativeuserjon = CreativeUser(username = 'jonndoe', password = '123445678', email = 'jonndooe@mail.com')
    
    def test_save_creativeuserjon(self):
        self.creativeuserjon.save()
        self.creativeuserjon.save_CreativeUser()
        userx = CreativeUser.objects.all()
        self.assertTrue(len(userx)>0)

    def test_delete_creativeuserjon(self):
        self.creativeuserjon.save()
        self.creativeuserjon.delete_CreativeUser()
        userx = CreativeUser.objects.all()
        self.assertTrue(len(userx)== 0)


class ServicesTestCase(TestCase):
    '''
    Test Class for Services Model
    '''
    def setUp(self):
        self.service = Services(name = 'photography')
    
    def test_save_service(self):
        self.service.save()
        self.service.save_services()
        service = Services.objects.all()
        self.assertTrue(len(service)>0)

    def test_delete_service(self):
        self.service.save()
        self.service.delete_services()
        service = Services.objects.all()
        self.assertTrue(len(service)== 0)



class CreativeProfileTestCase(TestCase):
    '''
    Test Class for Creative Profile Model
    '''
    def setUp(self):
        self.creative_id = CreativeUser(username = 'jonndoe', password = '123445678', email = 'jonndooe@mail.com')
        self.creative_profile = CreativeProfile(creative_id = self.creative_id, avatar = 'path/image.png', bio = 'I am a creative photographer and videographer looking for a studio that is affordable ')
        
    def test_save_creativeprofile(self):
        self.creative_id.save()
        self.creative_profile.save()
        self.creative_profile.save_creative_profile(sender=self.creative_id)
        profile = CreativeProfile.objects.all()
        self.assertTrue(len(profile)>0)

class ReviewTestCase(TestCase):
    '''
    Test Class for Review Model
    '''
    def setUp(self):
        self.creative_id = CreativeUser(username = 'jonndoe', password = '123445678', email = 'jonndooe@mail.com')
        self.review = Review(creative_id = self.creative_id ,message = 'The studio is well managed and the members are friendly, always willing to help')

    def test_save_review(self):
        self.creative_id.save()
        self.review.save()
        self.review.save_review()
        review = Review.objects.all()
        self.assertTrue(len(review)>0)

    def test_delete_review(self):
        self.review.save()
        self.review.delete_review()
        review = Review.objects.all()
        self.assertTrue(len(review)== 0)



class BookingTestCase(TestCase):
    '''
    Test Class for Booking Model
    '''
    def setUp(self):
        self.creative_id = CreativeUser(username = 'jonndoe', password = '123445678', email = 'jonndooe@mail.com')
        self.studio_id = StudioProfile(description='Commited to taking photos for your frames', location='Nairobi', rates='9000.00', logo='path/image.png',service_provided=self.service, studio_id=self.studio_userr,advert_photos=self.advert_oner)
        self.booking = Booking(email = 'photoframe@mail.com', session_duration = '5hours', session_time = '2018-11-20T15:58:44.767594-06:00', creative_id = self.creative_id, studio_id = self.studio_id)
    
    def test_save_booking(self):
        self.creative_id.save()
        self.studio_id.save()
        self.booking.save_booking()
        booking = Booking.objects.all()
        self.assertTrue(len(booking)>0)

    def test_del_booking(self):
        self.creative_id.save()
        self.studio_id.save()
        self.booking.delete_booking()
        booking = Booking.objects.all()
        self.assertTrue(len(booking)==0)



#studiouser(searchbyusername)
#line153