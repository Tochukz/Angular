import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log({route, state});

    const routerApp = localStorage.getItem('routerApp') || "{}";
    const authenticated = JSON.parse(routerApp).authenticated;
    if (authenticated === true) {
      if (state.url.toLowerCase() == '/login') {
        this.router.navigateByUrl('/');
        return false;
      }
      return true;
    }
    
    if (state.url.toLowerCase()  == '/login') {
      return true;
    }

    this.router.navigateByUrl('/login');
    return false;
  }
}
