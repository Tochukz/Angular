
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { environment as env } from './../../environments/environment';
import { Category } from './../models/category';
import { Subcategory } from './../models/subcategory';
import { Book } from './../models/book';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${env.bearerToken}`
    })
  };

  constructor(private httpClient: HttpClient) { }
  
  getCategories(): Observable<Category[]> {    
    const url = `${env.APIBaseUrl}/categories`;
    return this.httpClient
               .get<Category[]>(url, this.httpOptions)
               .pipe(
                 tap(_ => console.log('Fetched categories')),
                 catchError(this.handleError<Category[]>('getCategories', []))
               );
  }

  getSubcategory(subcategoryId: number): Observable<Subcategory> {
    const url = `${env.APIBaseUrl}/subcategories/${subcategoryId}`;
    return this.httpClient
               .get<Subcategory>(url, this.httpOptions)
               .pipe(
                 tap(_ => console.log(`Fetched subcategoy ${subcategoryId}`)),
                 catchError(this.handleError<Subcategory>('getSubcategory', new Subcategory()))
               );
  }

  getBook(bookId: number): Observable<Book> {
    const url = `${env.APIBaseUrl}/books/${bookId}`;
    return this.httpClient
               .get<Book>(url, this.httpOptions)
               .pipe(
                 tap(_ => console.log(`Fetched book ${bookId}`)),
                 catchError(this.handleError<Book>('getBook', new Book()))
               );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T);
    };
  }
}
