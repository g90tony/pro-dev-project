import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsignupComponent } from './clientsignup/clientsignup.component';
import { ClientloginComponent } from './clientlogin/clientlogin.component';
import { StudiosignupComponent } from './studiosignup/studiosignup.component';
import { StudiologinComponent } from './studiologin/studiologin.component';
import { LandingComponent } from './landing/landing.component';
import { BookingComponent } from './booking/booking.component';
import { ClientviewprofileComponent } from './clientviewprofile/clientviewprofile.component';
import { StudioEditProfileComponent } from './studioeditprofile/studioeditprofile.component';

const routes: Routes = [
  // client routes
  { path: 'client/signup', component: ClientsignupComponent },
  { path: 'client/login', component: ClientloginComponent },
  { path: 'client/studio/:id', component: ClientviewprofileComponent },
  // studio routes
  { path: 'studio/signup', component: StudiosignupComponent },
  { path: 'studio/login', component: StudiologinComponent },
  { path: 'studio/profile/edit', component: StudioEditProfileComponent },
  { path: 'booking', component: BookingComponent },
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
