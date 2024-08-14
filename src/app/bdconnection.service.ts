import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewandforgotService } from './login/newandforgot.service';

@Injectable({
  providedIn: 'root'
})
export class BDConnectionService {

  constructor(private http: HttpClient) { }
  
  // the URL of bbdd in a const
  private dburl='https://juegos-practica-default-rtdb.europe-west1.firebasedatabase.app'
  

  //methods

  //when a user is created in this method is created in the bbdd
  newuser(useruid: string, userData: { email: any; nombre: string; }){
    //console.log('estamos en el servicio correcto de bd');
    
    this.http.put(`${this.dburl}/users/${useruid}.json`, userData).subscribe(
      response=>console.log('guardado usuario '+response),
      //error=>console.log('error '+error),
    )
    //console.log('uid de usuario '+useruid)
    //console.log(userData)
    }


}
