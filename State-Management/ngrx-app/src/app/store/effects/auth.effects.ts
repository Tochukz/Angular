import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError , tap} from 'rxjs/operators';

import { AuthService } from './../../services/auth.service';
import { loginActions, authSuccessAction, authFailureAction } from './../actions/login-page.actions';

@Injectable()
export class AuthEffect {    
    login$ = createEffect(() => this.actions$.pipe(
      ofType(loginActions.login),
       exhaustMap( cred =>
          this.authService
              .login(cred)
              .pipe(
                tap(_ => console.log('authEffect auth response')),
                map(loginResponse => authSuccessAction(loginResponse)),
                catchError(error => of(authFailureAction(error)))
              )
     )
    ))

    constructor(private actions$: Actions, private authService: AuthService) {}
}