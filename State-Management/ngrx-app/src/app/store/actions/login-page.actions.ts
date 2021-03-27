import { createAction, props } from '@ngrx/store';

export const loginActions = {
  login: '[Login Page] Login',
  authSuccess: '[API Auth] Success',
  authFailure: '[API Auth] Failure',
}

export const loginPageAction = createAction(loginActions.login, props<{username: string, password: string}>());

export const authSuccessAction = createAction(loginActions.authSuccess, props<{token: string}>());

export const authFailureAction = createAction(loginActions.authFailure, props<{message: string}>());