import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate {
  auth = {};

  constructor(private router: Router, private store: Store<{auth: object}>) {
    this.store.select('auth').subscribe(auth => {     
      this.auth = auth;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {   
    const url = state.url;
    const isAuthenticated = this.auth['authenticated'];      
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
