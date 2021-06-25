import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// public pages
import { LandingComponent } from './pages/landing/landing.component';
// protected client pages
import { ClientsignupComponent } from './pages/client/clientsignup/clientsignup.component';
import { ClientloginComponent } from './pages/client/clientlogin/clientlogin.component';
import { ClientviewprofileComponent } from './pages/client/clientviewprofile/clientviewprofile.component';
// protected studio pages
import { StudiologinComponent } from './pages/studio/studiologin/studiologin.component';
import { StudiosignuppageComponent } from './pages/studio/studiosignuppage/studiosignuppage.component';
import { StudiosignupComponent } from './pages/studio/studiosignup/studiosignup.component';
import { StudioclientpageComponent } from './pages/studio/studioclientpage/studioclientpage.component';
import { StudioEditProfileComponent } from './pages/studio/studioeditprofile/studioeditprofile.component';
// ui components
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { BookingComponent } from './components/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ClientsignupComponent,
    ClientloginComponent,
    ClientviewprofileComponent,
    StudiosignupComponent,
    StudiologinComponent,
    StudiosignuppageComponent,
    StudioclientpageComponent,
    StudioEditProfileComponent,
    NavbarComponent,
    SearchComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
