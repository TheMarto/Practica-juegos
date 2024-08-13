import { Component } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {
constructor(private router:Router, private cookies:CookieService, private LoginService:LoginService){}

loginact(){
  return this.LoginService.getIdToeken()
}
useriudurl:string=this.LoginService.useruid;


}
