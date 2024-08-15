import { Component } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { BDConnectionService } from './bdconnection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Play Store Game';
  btnlogin='';

  constructor(private LoginService:LoginService, private router:Router, private cookies:CookieService, private bdconnection: BDConnectionService){  }

  ngOnInit(): void{
    firebase.initializeApp({

  apiKey: "AIzaSyB2Bt5ry_DNNy-1mL4YdBKTzWmbl812nKM",

  authDomain: "juegos-practica.firebaseapp.com",

  databaseURL: "https://juegos-practica-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "juegos-practica",

  storageBucket: "juegos-practica.appspot.com",

  messagingSenderId: "313795819012",

  appId: "1:313795819012:web:94e35165929de73c65a751"

    });
    this.btnname();
    //console.log('token es '+this.LoginService.token);

    //console.log('uid de cliente: '+this.LoginService.useruid)
  }
  //method button
  btnloginftn() {
    if(this.LoginService.token!=""){
      this.LoginService.logout();
      this.btnname();
    }
    else{
      this.router.navigate(['login']);
      this.btnname();
    };


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


   //funtion for login button
  loginnow(){

    return this.LoginService.getIdToeken()

  }

}
