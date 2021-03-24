import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { Category } from './../models/category'; 
import { environment as env } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  fetchCategories(): Observable<Category[]> {
    const url = `${env.APIBaseUrl}/categories`;
    return this.httpClient
               .get<Category[]>(url)
               .pipe(
                 tap(_ => console.log('fetched categories')),
                 catchError(this.handleError<Category[]>('fetchCategories', []))
               );
  }

  private handleError<T>(operation = 'operation', result: T) {
    return (error: any, caught: Observable<T>) => {
      console.error({operation, error, caught});
      return of(result as T);
    }
  }
}
