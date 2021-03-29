import { createReducer, on, Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { authSuccessAction, authFailureAction, resetAuthToken } from './../actions/login-page.actions';

export interface State {
 authenticated: boolean;
 token: string;
 errorMsg: string,
}

export const authReducerKey = 'auth';

const initailState = {
  authenticated: false,
  token: '',
  errorMsg: ''
};

const reducer = createReducer(
  initailState,
  on(authSuccessAction, (state, data) => {
    return {
      ...state,
      authenticated: true,
      token: data.token,
      errorMsg: '',
    };
  }),
  on(authFailureAction, (state, error) => {
    const err = error as HttpErrorResponse;
    const errorMsg = err.error && err.error.message || err.message;
    return {
      ...state,
      authenticated: false,
      errorMsg,
    };
  }),
  on(resetAuthToken, state => {
    return {
      ...state,
      authenticated: false,
      token: '',      
    }
  })
);

export function authReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
};

