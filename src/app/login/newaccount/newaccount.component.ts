import { Component } from '@angular/core';
import { NewandforgotService } from '../newandforgot.service';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrl: './newaccount.component.css'
})
export class NewaccountComponent {
show = "false";
  constructor(private NewandforgotService: NewandforgotService, private route: Router){}

  errormsn:string="";

  newaccountform(nwform:NgForm){
    const pwd = nwform.value.pwd;
    const pwd2 = nwform.value.pwd2;
  
    if(pwd==pwd2){
    const email=nwform.value.email;
    const pwd=nwform.value.pwd;
    const Name = nwform.value.Name;
    this.NewandforgotService.newAccont(email,pwd, Name);
    //return console.log("creado usuario: "+Name)
    }
    else{
      this.errormsn="true";
      setTimeout(() => {
        this.errormsn="";
      }, 3000);
      //return errormsn;

    }
  }

}
