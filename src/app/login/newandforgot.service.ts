import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class NewandforgotService {

  constructor(private route:Router, private cookie: CookieService) { }

  //new account
  newAccont(email:string, pwd:string){
    firebase.auth().createUserWithEmailAndPassword(email, pwd).then(
      response=>{
        //console.log('contraseña creada :'+response.user?.uid);
        this.route.navigate(['/login']);
      }
    )
  }



}
