import { Component } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Play Store Game';
  btnlogin='';

  constructor(private LoginService:LoginService, private router:Router, private cookies:CookieService){  }

  ngOnInit(): void{
    firebase.initializeApp({

      apiKey: "AIzaSyB2Bt5ry_DNNy-1mL4YdBKTzWmbl812nKM",

      authDomain: "juegos-practica.firebaseapp.com",


    });
    this.btnname();
    console.log(this.LoginService.token);


  }
  //method button
  btnloginftn() {
    if(this.LoginService.token!=""){
      this.LoginService.logout();
    }
    else{
      this.router.navigate(['login']);
    };
    this.btnname();

  };

   //button name
   btnname(){
   if(this.LoginService.token!=""){
    this.btnlogin="loginOut";
  }
  else{
    this.btnlogin="login";
  };
   }

}
