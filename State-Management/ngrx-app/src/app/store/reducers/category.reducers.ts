import { createReducer, on, Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { fetchCategorySuccess, fetchCategoryFailure } from './../actions/category.actions';

import { Category } from './../../models/category';

export const categoryReducerKey = 'category';

export interface State {
  categories: Category[],
  errorMsg: string,
};

const initialState = {
  categories: [],
  errorMsg: '',
};

export const reducer = createReducer(
  initialState,
  on(fetchCategorySuccess, (state, data) => {
    return {
      ...state,
      categories: data.payload,
    };
  }),
  on(fetchCategoryFailure, (state, data) => {
    const err = <HttpErrorResponse>data.payload;
    const errorMsg = err.error && err.error.message || err.message;
    return {
      ...state,
      errorMsg,
    };
  })
);

export function categoryReducers(state: State | undefined, action: Action) {
  return reducer(state, action);
};
