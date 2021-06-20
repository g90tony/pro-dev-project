import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudiosignuppageComponent } from './studiosignuppage/studiosignuppage.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { StudioclientpageComponent } from './studioclientpage/studioclientpage.component';
import { ProfileeditpageComponent } from './profileeditpage/profileeditpage.component';

@NgModule({
  declarations: [
    AppComponent,
    StudiosignuppageComponent,
    StudioclientpageComponent,
    ProfileeditpageComponent,
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
        path: "profile",
        component: StudioclientpageComponent
      },
      {
        path: "edit",
        component: ProfileeditpageComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
