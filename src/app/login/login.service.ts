//SERVICE INJECTABLE FOR LOGIN SERVICES


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app' // importo firebase
import 'firebase/compat/auth' //importo authentificacion
import { CookieService } from 'ngx-cookie-service';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { getAuth } from "firebase/auth";




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private router:Router, private cookies: CookieService) {}


     //variable que usaremos de token
     token:string=this.cookies.get('token3'); // si no le doy valor a token da error al no inicializar por ende el igual


     //función para obetener el token de firebase
    loginftn(email:string, pwd:string){
      firebase.auth().signInWithEmailAndPassword(email,pwd).then( //funcion que auth hace referencia a la autentificacion,
                              //singIn.. a como se autentifica y then para retornar cuando la promesa es resuelta
        response=>{
          firebase.auth().currentUser?.getIdToken().then( //aqui de currenUser sacamos el token con getIdToken cuando retorna respuesta
            token=>{

              this.token=token; // copiamos en la variable
              this.cookies.set('token3', this.token); // aqui guardamos en la cookie con el nombre toker3 y la variable token
              //console.log('el token es: '+ token);
              //console.log(' coockie es: '+ this.cookies.get('token3'));
              this.router.navigate(['']);
            }
          )
        }
      )

    };

    //funtion para tener el valor a cookie
  getIdToken(){
    //return this.token;
    return this.cookies.get('token3');
  }


  //funtion para eliminar la cookie
  logout(){

    firebase.auth().signOut().then(()=>{

      this.token='';
      this.cookies.delete('token3');
      this.router.navigate(['/']);
      //console.log('funtion logout btn');
      
    });

  }


  //google auth code:
  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
      result => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.cookies.set('token3', this.token);
            this.router.navigate(['']);
          }
        );
      }
    ).catch(error => {
      console.error('Error en la autenticación con Google: ', error);
    });
  }
}
