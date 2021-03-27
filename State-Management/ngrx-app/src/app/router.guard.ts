import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const store = JSON.parse(localStorage.getItem('store') || '{}');
    const url = state.url;
    const isAuthenticated = store.authenticated;   
    if (url.includes('/login') && !isAuthenticated) {
      return true;
    } else if(url.includes('/login') && isAuthenticated) {
      this.router.navigateByUrl('/');
      return false;
    } else if (!url.includes('/login') && !isAuthenticated) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return isAuthenticated;
  }
  
}
