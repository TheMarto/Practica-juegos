import { Component } from '@angular/core';
import { NewandforgotService } from '../../newandforgot.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrl: './changepwd.component.css'
})
export class ChangepwdComponent {
  private oobCode:string=""

  constructor(private NewandforgotComponent: NewandforgotService, private route:ActivatedRoute){

      //oobcode del link
  
  this.route.queryParams.subscribe(
    params=>{
      this.oobCode=params['oobCode'];
      //console.log(this.oobCode);
    }
    );

  }
  changepwd(chForm:NgForm){
    let newpwd= chForm.value.newpwd;
    let newpwd2=chForm.value.newpwd2;
    //console.log(newpwd)
    if(newpwd=newpwd2){ //confirmo que las contraseña sean iguales
      this.NewandforgotComponent.changepassword(this.oobCode,newpwd);
    }
    

  }
}
