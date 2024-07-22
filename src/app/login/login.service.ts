import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app' // importo firebase
import 'firebase/compat/auth' //importo authentificacion
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router, private cookies: CookieService) {

    }
    token:string=""; //variable que usaremos de token
    cookievalue:any;

    loginftn(email:string, pwd:string){
      firebase.auth().signInWithEmailAndPassword(email,pwd).then( //funcion que auth hace referencia a la autentificacion,
                              //singIn.. a como se autentifica y then para retornar cuando la promesa es resuelta
        response=>{
          firebase.auth().currentUser?.getIdToken().then( //aqui de currenUser sacamos el token con getIdToken cuando retorna respuesta
            token=>{

              this.token=token; // copiamos en la variable
              this.cookies.set('token3', this.token); // aqui guardamos en la cookie con el nombre toker3 y la variable token
              //console.log('el token es: '+ token),
              //console.log(' coockie es: '+ this.cookies.get('token3'));
              this.cookievalue = this.cookies;
              this.router.navigate(['/']);
            }
          )
        }
      )

    };
  getIdToken(){
    //return this.token;
    return this.cookies.get('token3');
  }

  logout(){

    firebase.auth().signOut().then(()=>{

      this.token='';
      this.cookies.set('token3',this.token);
      this.router.navigate(['/']);

    });

  }

}
