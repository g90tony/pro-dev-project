import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './pages/studio/review/review.component';

import { ClientEditProfileComponent } from './pages/client/editprofile/clienteditprofile.component';
import { ClientloginComponent } from './pages/client/login/clientlogin.component';
import { ClientsignupComponent } from './pages/client/signup/clientsignup.component';
import { ClientViewStudioComponent } from './pages/client/viewstudio/viewstudio.component';
import { ClientCreateProfileComponent } from './pages/client/createprofile/clientcreateprofile.component';
import { ClientpostfeedComponent } from './pages/client/clientpostfeed/clientpostfeed.component';
import { ClientsearchresultsComponent } from './pages/client/clientsearchresults/clientsearchresults.component';

import { LandingComponent } from './pages/landing/landing.component';

import { StudioCreateProfileComponent } from './pages/studio/createprofile/studiocreateprofile.component';
import { StudiodashboardComponent } from './pages/studio/dashboard/studiodashboard.component';
import { StudioEditProfileComponent } from './pages/studio/editprofile/studioeditprofile.component';
import { StudiologinComponent } from './pages/studio/login/studiologin.component';
import { StudiosignupComponent } from './pages/studio/signup/studiosignup.component';
import { StudioCreateAdvertComponent } from './pages/studio/createadvert/studiocreateadvert.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  // client routes
  { path: 'client/signup', component: ClientsignupComponent },
  { path: 'client/login', component: ClientloginComponent },
  { path: 'client/feed', component: ClientpostfeedComponent },
  {
    path: 'client/search/:search_query',
    component: ClientsearchresultsComponent,
  },
  { path: 'client/profile/edit', component: ClientEditProfileComponent },
  {
    path: 'client/profile/create',
    component: ClientCreateProfileComponent,
  },
  { path: 'client/profile/studio/:id/', component: ClientViewStudioComponent },
  { path: 'client/profile/studio/:id/reviews', component: ReviewComponent },

  // studio routes
  { path: 'studio/signup', component: StudiosignupComponent },
  { path: 'studio/login', component: StudiologinComponent },
  {
    path: 'studio/dashboard',
    component: StudiodashboardComponent,
  },
  { path: 'studio/profile/edit', component: StudioEditProfileComponent },
  { path: 'studio/profile/create', component: StudioCreateProfileComponent },
  { path: 'studio/advert/create', component: StudioCreateAdvertComponent },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
