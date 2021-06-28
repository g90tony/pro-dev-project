import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LandingComponent } from './pages/landing/landing.component';
import { ClientsignupComponent } from './pages/client/signup/clientsignup.component';
import { ClientloginComponent } from './pages/client/login/clientlogin.component';
import { ClientviewprofileComponent } from './pages/client/viewprofile/clientviewprofile.component';
import { ClientEditProfileComponent } from './pages/client/editprofile/clienteditprofile.component';

import { StudiosignupComponent } from './pages/studio/studiosignup/studiosignup.component';
import { StudiologinComponent } from './pages/studio/studiologin/studiologin.component';
import { StudiosignuppageComponent } from './pages/studio/studiosignuppage/studiosignuppage.component';
import { StudioclientpageComponent } from './pages/studio/studioclientpage/studioclientpage.component';
import { StudioEditProfileComponent } from './pages/studio/studioeditprofile/studioeditprofile.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { BookingComponent } from './components/booking/booking.component';

import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/errors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,

    ClientsignupComponent,
    ClientloginComponent,
    ClientviewprofileComponent,
    ClientEditProfileComponent,

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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
