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
  constructor(private NewandforgotService: NewandforgotService, private route: Router){}

  newaccountform(nwform:NgForm){
    const email=nwform.value.email;
    const pwd=nwform.value.pwd;
    this.NewandforgotService.newAccont(email,pwd);
    //console.log(email+pwd)
  }

}
