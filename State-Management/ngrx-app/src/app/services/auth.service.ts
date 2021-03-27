import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }  from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment as env } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(cred): Observable<any> {
    const url = `${env.APIAdminUrl}/login`;
    return this.http
               .post(url, cred)
               .pipe(
                 tap(_ => console.log('authService authenticated'))
               )
  }
}
