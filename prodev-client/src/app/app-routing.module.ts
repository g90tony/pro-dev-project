import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientEditProfileComponent } from './pages/client/clienteditprofile/clienteditprofile.component';
import { ClientloginComponent } from './pages/client/clientlogin/clientlogin.component';
import { ClientsignupComponent } from './pages/client/clientsignup/clientsignup.component';
import { ClientviewprofileComponent } from './pages/client/clientviewprofile/clientviewprofile.component';
import { LandingComponent } from './pages/landing/landing.component';
import { StudioclientpageComponent } from './pages/studio/studioclientpage/studioclientpage.component';
import { StudiodashboardComponent } from './pages/studio/studiodashboard/studiodashboard.component';
import { StudioEditProfileComponent } from './pages/studio/studioeditprofile/studioeditprofile.component';
import { StudiologinComponent } from './pages/studio/studiologin/studiologin.component';
import { StudiosignupComponent } from './pages/studio/studiosignup/studiosignup.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '/' },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
