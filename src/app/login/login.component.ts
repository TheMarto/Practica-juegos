import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private LoginService:LoginService){

  }
  login(form:NgForm){

    const email=form.value.email;
    const pwd= form.value.pwd;
    this.LoginService.loginftn(email,pwd);
  }
  logingoogle(){
    this.LoginService.loginWithGoogle();
    
  }
  loginface(){
    this.LoginService.loginWithFacebook()
    
  }
  loginx(){
    this.LoginService.loginWithX()
    
  }
  loginapple(){
    this.LoginService.loginWithApple()
    
  }

}