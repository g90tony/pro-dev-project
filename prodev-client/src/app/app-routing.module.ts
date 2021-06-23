import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsignupComponent } from './clientsignup/clientsignup.component';
import { ClientloginComponent } from './clientlogin/clientlogin.component';
import { StudiosignupComponent } from './studiosignup/studiosignup.component';
import { StudiologinComponent } from './studiologin/studiologin.component';
import { LandingComponent } from './landing/landing.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
{path:"clientsignup", component:ClientsignupComponent},
{path:"clientlogin", component:ClientloginComponent},
{path:"studiosignup", component:StudiosignupComponent},
{path:"studiologin", component:StudiologinComponent},
{path:"booking", component:BookingComponent},
{path:"", component:LandingComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
