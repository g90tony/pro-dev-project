import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './pages/review/review.component';

import { ClientEditProfileComponent } from './pages/client/editprofile/clienteditprofile.component';
import { ClientloginComponent } from './pages/client/login/clientlogin.component';
import { ClientsignupComponent } from './pages/client/signup/clientsignup.component';
import { ClientViewStudioComponent } from './pages/client/viewstudio/viewstudio.component';

import { LandingComponent } from './pages/landing/landing.component';

import { StudioCreateProfileComponent } from './pages/studio/createprofile/studiocreateprofile.component';
import { StudiodashboardComponent } from './pages/studio/dashboard/studiodashboard.component';
import { StudioEditProfileComponent } from './pages/studio/editprofile/studioeditprofile.component';
import { StudiologinComponent } from './pages/studio/login/studiologin.component';
import { StudiosignupComponent } from './pages/studio/signup/studiosignup.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  // client routes
  { path: 'client/signup', component: ClientsignupComponent },
  { path: 'client/login', component: ClientloginComponent },
  { path: 'client/view-studio/:id', component: ClientViewStudioComponent },
  { path: 'client/view-studio/:id', component: ClientEditProfileComponent },
  { path: 'client/view-studio/:id/reviews', component: ReviewComponent },
  // studio routes
  { path: 'studio/signup', component: StudiosignupComponent },
  { path: 'studio/login', component: StudiologinComponent },
  {
    path: 'studio/<int:user_id>/dashboard',
    component: StudiodashboardComponent,
  },
  { path: 'studio/profile/edit', component: StudioEditProfileComponent },
  { path: 'studio/profile/create', component: StudioCreateProfileComponent },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
