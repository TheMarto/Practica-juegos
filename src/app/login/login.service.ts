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
    token:any; //variable que usaremos de token

    loginftn(email:string, pwd:string){
      firebase.auth().signInWithEmailAndPassword(email,pwd).then( //funcion que auth hace referencia a la autentificacion,
                              //singIn.. a como se autentifica y then para retornar cuando la promesa es resuelta
        response=>{
          firebase.auth().currentUser?.getIdToken().then( //aqui de currenUser sacamos el token con getIdToken cuando retorna respuesta
            token=>{

              this.token=token; // copiamos en la variable
              this.cookies.set('titoken', token); // aqui guardamos en la cookie con el nombre toker3 y la variable token
              console.log(' coocki es: '+ this.cookies.get('tiktoken'))
              this.router.navigate(['/']);
            }
          )
        }
      )

    };
  getIdToeken(){
    //return this.token;
    return this.cookies.get('tiktoken');
  }

  logout(){

    firebase.auth().signOut().then(()=>{

      this.token="";
      return this.cookies.set('tiktoken', this.token);
      this.router.navigate(['/']);

    });

  }

}
