import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {

  constructor(private route: Router) { }
}
