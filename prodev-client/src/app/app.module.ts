import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsignupComponent } from './clientsignup/clientsignup.component';
import { ClientloginComponent } from './clientlogin/clientlogin.component';
import { StudiosignupComponent } from './studiosignup/studiosignup.component';
import { StudiologinComponent } from './studiologin/studiologin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { SearchComponent } from './search/search.component';
import { StudiosignuppageComponent } from './studiosignuppage/studiosignuppage.component';
import { StudioclientpageComponent } from './studioclientpage/studioclientpage.component';
import { ProfileeditpageComponent } from './profileeditpage/profileeditpage.component';
import { ClientviewprofileComponent } from './clientviewprofile/clientviewprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsignupComponent,
    ClientloginComponent,
    StudiosignupComponent,
    StudiologinComponent,
    NavbarComponent,
    LandingComponent,
    StudiosignuppageComponent,
    StudioclientpageComponent,
    ProfileeditpageComponent,
    ClientviewprofileComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
