import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsignupComponent } from './clientsignup/clientsignup.component';
import { ClientloginComponent } from './clientlogin/clientlogin.component';
import { StudiosignupComponent } from './studiosignup/studiosignup.component';
import { StudiologinComponent } from './studiologin/studiologin.component';


const routes: Routes = [
{path:"home", component:ClientsignupComponent},
{path:"navbar", component:ClientloginComponent},
{path:"register", component:StudiosignupComponent},
{path:"login", component:StudiologinComponent}
 ];
      
    @NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
      })
      export class AppRoutingModule { }