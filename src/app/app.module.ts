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
import { ChatComponent } from './chat/chat.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule, HttpClient, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth/web-extension';
import { NewaccountComponent } from './login/newaccount/newaccount.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { ChangepwdComponent } from './login/forgot/changepwd/changepwd.component';
import { NotificationComponent } from './login/forgot/notification/notification.component';




const appRoutes:Routes=[

  {path:'', component:JuegosComponent},
  {path:'login', component: LoginComponent},
  {path:'myfriends', component: MyfriendsComponent},
  {path:'chat', component: ChatComponent},
  {path:'login/newaccount', component: NewaccountComponent},
  {path:'login/forgot', component: ForgotComponent},
  {path:'login/verify', component: LoginComponent},
  {path:'myfriends/:id', component: ChatComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'login/changepwd', component: ChangepwdComponent},
  {path:'**', component: ErrorComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    LoginComponent,
    ListComponent,
    MyfriendsComponent,
    ChatComponent,
    NewaccountComponent,
    ForgotComponent,
    ChangepwdComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [Router, CookieService, LoginService, GoogleAuthProvider, FacebookAuthProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
