import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientEditProfileComponent } from './pages/client/editprofile/clienteditprofile.component';
import { ClientloginComponent } from './pages/client/login/clientlogin.component';
import { ClientsignupComponent } from './pages/client/signup/clientsignup.component';
import { ClientviewprofileComponent } from './pages/client/viewprofile/clientviewprofile.component';

import { LandingComponent } from './pages/landing/landing.component';

import { StudioclientpageComponent } from './pages/studio/clientpage/studioclientpage.component';
import { StudiodashboardComponent } from './pages/studio/dashboard/studiodashboard.component';
import { StudioEditProfileComponent } from './pages/studio/editprofile/studioeditprofile.component';
import { StudiologinComponent } from './pages/studio/login/studiologin.component';
import { StudiosignupComponent } from './pages/studio/signup/studiosignup.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  // client routes
  { path: 'client/signup', component: ClientsignupComponent },
  { path: 'client/login', component: ClientloginComponent },
  { path: 'client/view-studio/:id', component: ClientviewprofileComponent },
  { path: 'client/view-studio/:id', component: ClientEditProfileComponent },
  // studio routes
  { path: 'studio/signup', component: StudiosignupComponent },
  { path: 'studio/login', component: StudiologinComponent },
  {
    path: 'studio/<int:user_id>/dashboard',
    component: StudiodashboardComponent,
  },
  { path: 'studio/profile/edit', component: StudioEditProfileComponent },
  { path: 'studio/profile/create', component: StudioclientpageComponent },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
