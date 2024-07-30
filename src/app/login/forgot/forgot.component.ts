import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewandforgotService } from '../newandforgot.service';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent {

  constructor(private route:Router, private NewandforgotService: NewandforgotService){}

  forgotpwd(fgForm:NgForm){
    const email= fgForm.value.emailfg;
    this.NewandforgotService.forgotpassword(email);
  }

}
