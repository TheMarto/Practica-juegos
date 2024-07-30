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

  //new account - send email confirmation
  newAccont(email:string, pwd:string){
    firebase.auth().createUserWithEmailAndPassword(email, pwd).then(
      response=>{
        response.user?.sendEmailVerification()// verify email
        //console.log('contraseña creada :'+response.user?.uid);
        this.route.navigate(['login']);
      }
    )
  }

//forgot password - send email
forgotpassword(emailfg: string){
  firebase.auth().sendPasswordResetEmail(emailfg).then(
    response=>{
      console.log('correo de verificación');
      this.route.navigate(['notification']);
      setTimeout(
        ()=>{
          this.route.navigate([''])
          },
        5000
      );
    }
  )
}
//change password - from email
changepassword(oobCode: string,newpwd: string){
  //console.log('datos link: '+oobCode+' dato pass: '+newpwd);
  
  firebase.auth().confirmPasswordReset(oobCode,newpwd).then(
    change=>{
    //console.log("contraseña cambiada por :"+ newpwd);
    this.route.navigate(['login']);  
  }
  )
}
}
