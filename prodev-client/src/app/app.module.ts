import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudiosignuppageComponent } from './studiosignuppage/studiosignuppage.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { StudioclientpageComponent } from './studioclientpage/studioclientpage.component';
import { ProfileeditpageComponent } from './profileeditpage/profileeditpage.component';
import { ClientviewprofileComponent } from './clientviewprofile/clientviewprofile.component';
import { ChartroomComponent } from './chartroom/chartroom.component';
import { StudiodashboardComponent } from './studiodashboard/studiodashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StudiosignuppageComponent,
    StudioclientpageComponent,
    ProfileeditpageComponent,
    ClientviewprofileComponent,
    ChartroomComponent,
    StudiodashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: "signup",
        component: StudiosignuppageComponent
      },
      {
        path: "create_profile",
        component: StudioclientpageComponent
      },
      {
        path: "edit",
        component: ProfileeditpageComponent
      },
      {
        path: "view_profile",
        component: ClientviewprofileComponent
      },
      
       {
        path: "dashboard",
        component: StudiodashboardComponent
      },
       {
        path: "chart_room",
        component: ChartroomComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
