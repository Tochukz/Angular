import { createAction, props } from '@ngrx/store';

export const categoryActions = {
  fetchCategories: '[Category Page] FetchCategories',
  fetchCategorySuccess: '[API Category] FetchSuccess',
  fetchCategoryFailure: '[API Category] FetchFailure',
};

export const fetchCategoriesAction = createAction(categoryActions.fetchCategories); 
export const fetchCategorySuccess = createAction(categoryActions.fetchCategorySuccess, props<any>());
export const fetchCategoryFailure = createAction(categoryActions.fetchCategoryFailure, props<any>());