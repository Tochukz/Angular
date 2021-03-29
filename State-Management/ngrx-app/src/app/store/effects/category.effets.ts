import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { of } from 'rxjs'; 
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

import { CategoryService } from './../../services/category.service';
import { categoryActions } from './../actions/category.actions';
@Injectable()
export class CategoryEffets {

  fetchCategories = createEffect(() => this.actions$.pipe(
    ofType(categoryActions.fetchCategories),
    mergeMap(
        () => this.categoryService
                  .fetchCategories()
                  .pipe(
                    tap(_ => console.log('fetched Categories')),
                    map(categories => ({type: categoryActions.fetchCategorySuccess, payload: categories})),
                    catchError(error => { 
                      console.error(error);
                      return of({type: categoryActions.fetchCategoryFailure, payload: error})
                    })
                  )
    )
  ))

  constructor(private actions$: Actions, private categoryService: CategoryService) {}
}
