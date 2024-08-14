import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { BDConnectionService } from '../bdconnection.service';

@Injectable({
  providedIn: 'root'
})
export class NewandforgotService {

  constructor(private route:Router, private cookie: CookieService, private bdconnection: BDConnectionService) { }

  //uid de usuario creado
  useruid:any;
  
  
  //new account - send email confirmation >>> GREGAR AQUÍ LO DE CREATE USER!!!
  newAccont(email:string, pwd:string){
    firebase.auth().createUserWithEmailAndPassword(email, pwd).then(
      response=>{
        response.user?.sendEmailVerification()// verify email
        this.useruid = firebase.auth().currentUser?.uid;
        //console.log('nandfor-- user uid es '+this.useruid);
        const dataservice={
          "email": email,
          "nombre": "",
        };
        this.bdconnection.newuser(this.useruid, dataservice);
        //console.log('nandfor-- contraseña creada :'+response.user?.email);
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
