import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate {
  constructor(private router: Router ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //console.log({next, state});
    const store = JSON.parse(localStorage.getItem('store') || '{}');
    const isAuthenticated = store.authenticated === true
    if (state.url.includes('/admin/login') && isAuthenticated) {
      this.router.navigateByUrl('/admin');
      return false;
    } else if (state.url.includes('/admin/login') && !isAuthenticated) {
      return true;
    } else if (!state.url.includes('/admin/login') && !isAuthenticated){
      this.router.navigateByUrl('/admin/login');
    }
    return isAuthenticated;
  }
}
