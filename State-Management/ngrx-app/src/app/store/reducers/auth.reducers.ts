import { createReducer, on, Action } from '@ngrx/store';

import { authSuccessAction, authFailureAction } from './../actions/login-page.actions';

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
  on(authFailureAction, (state, data) => {
    return {
      ...state,
      authenticated: false,
      errorMsg: data.message
    };
  })
);

export function authReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}

