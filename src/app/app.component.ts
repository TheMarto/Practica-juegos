import { Component } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Play Store Game';
  btnlogin="";

  constructor(private LoginService:LoginService, private router:Router){}



  ngOnInit(){
    firebase.initializeApp({

      apiKey: "AIzaSyB2Bt5ry_DNNy-1mL4YdBKTzWmbl812nKM",

      authDomain: "juegos-practica.firebaseapp.com",


    });

    

  }




  //method button
  btnloginftn() {
    if(this.LoginService.token!=""){
      this.LoginService.logout();
    }
    else{
      this.router.navigate(['login']);
    };

    this.updateBottonName();
    console.log(this.btnlogin);
    console.log('token '+this.LoginService.token);

  };


     //button name (se llama arriba cuando se acciona)
     updateBottonName(){
     if(this.LoginService.token==""){
      this.btnlogin="login"
    }
    else{
      this.btnlogin="loginOut"
    };
     }



}
