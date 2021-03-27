import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { of } from 'rxjs'; 
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CategoryService } from './../../services/category.service';

@Injectable()
export class CategoryEffets {

  fetchCategories = createEffect(() => this.actions$.pipe(
    ofType('[Category Page] FetchCategories'),
    mergeMap(
        () => this.categoryService
                  .fetchCategories()
                  .pipe(
                    map(categories => ({type: '[Category API] Category Success', payload: categories})),
                    catchError(() => of({type: '[Category API] Category Error'}))
                  )
    )
  ))

  constructor(private actions$: Actions, private categoryService: CategoryService) {}
}
