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

  constructor(private LoginService:LoginService){}

  ngOnInit(): void{
    firebase.initializeApp({

      apikey: "AIzaSyB2Bt5ry_DNNy-1mL4YdBKTzWmbl812nKM",
      authDomain: "juegos-practica.firebaseapp.com",

    })

  }



}
