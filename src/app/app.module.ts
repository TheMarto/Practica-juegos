import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegosComponent } from './juegos/juegos.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './juegos/list/list.component';
import { MyfriendsComponent } from './myfriends/myfriends.component';

const appRoutes:Routes=[

  {path:'', component:JuegosComponent},
  {path:'login', component: LoginComponent},
  {path:'myfriends', component: MyfriendsComponent},
  {path:'**', component: ErrorComponent},
  

]

@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    LoginComponent,
    ListComponent,
    MyfriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [Router],
  bootstrap: [AppComponent]
})
export class AppModule { }
