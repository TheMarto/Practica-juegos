import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BDConnectionService {

  constructor(private http: HttpClient) { }
  
  private dburl='https://juegos-practica-default-rtdb.europe-west1.firebasedatabase.app'

  newuser(useruid: string, userData: any):Observable<any> {
    return this.http.put('${this.dburl}/users/${useruid}.json', userData);
  }

}
