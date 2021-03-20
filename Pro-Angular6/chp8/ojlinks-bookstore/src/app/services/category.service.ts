import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Category } from '../category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer eyJ0eXAi.eyJpc3MiOiJodHRwc.Xr4RyLS8peO_1S9'
    })
  };

  constructor(private httpClient: HttpClient) { }
  
  getCategories(): Observable<Category[]> {
    const url = 'http://ojlinks-api.test:8084/api/categories';
    return this.httpClient
               .get<Category[]>(url, this.httpOptions)
               .pipe(
                 tap(_ => console.log('Fetched categories')),
                 catchError(this.handleError<Category[]>('getCategories', []))
               );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
