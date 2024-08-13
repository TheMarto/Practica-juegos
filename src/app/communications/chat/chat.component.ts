import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

    constructor(private route:Router, private LoginService:LoginService){}

    ngOnInit(){

    }

    sendMessage(){};
    updateMessage(){};
    deleteMessage(){};
}
