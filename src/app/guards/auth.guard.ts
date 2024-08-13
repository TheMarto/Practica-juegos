import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service'; // Ajusta la ruta según tu estructura de proyecto

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      const isAuthenticated = this.loginService.getIdToeken(); // authentication logic
      if (isAuthenticated=="") {
        return this.router.parseUrl('/login'); // Redirect if not authenticated
      }
      return true;
  }
}
