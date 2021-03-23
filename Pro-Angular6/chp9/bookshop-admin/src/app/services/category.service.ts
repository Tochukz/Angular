import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map} from 'rxjs/operators';

import { Category } from './../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ',
    })
  }
  constructor(private httpClient: HttpClient) { }

  fetchCategories(): Observable<Category[]> {
    const url = "http://ojlinks-api.test:8084/api/categories";
    return this.httpClient
               .get<Category[]>(url, this.httpOptions)
               .pipe(
                 tap(_ => console.log('fetched Categories')),
                 catchError(this.handleError<Category[]>('fetchCategories', []))
               );
  }

  login(cred: Object): Observable<Object> {
    const url = 'http://ojlinks-api.test:8084/admin/login';
    return this.httpClient
               .post(url, cred)
               .pipe(
                 map(data =>  {                   
                   return data;
                 }),
                 catchError(this.handleError<Object>('login', {}))
               );
  }

  handleError<T>(operation = 'operation', result: T) {
    return (error: any, caught: Observable<T>) => { 
      console.error({ operation, error, caught });
      return of(result)
    };
  }
}
