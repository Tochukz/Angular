import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { ConfigService } from './config.service';
import { Category } from '../category/category';
import { Subcategory } from './../subcategory/subcategory';
import { Book } from '../book/book';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.configService.bearerToken}`
    })
  };

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }
  
  getCategories(): Observable<Category[]> {    
    const url = `${this.configService.APIBaseUrl}/categories`;
    return this.httpClient
               .get<Category[]>(url, this.httpOptions)
               .pipe(
                 tap(_ => console.log('Fetched categories')),
                 catchError(this.handleError<Category[]>('getCategories', []))
               );
  }

  getSubcategory(subcategoryId): Observable<Subcategory> {
    const url = `${this.configService.APIBaseUrl}/subcategories/${subcategoryId}`;
    return this.httpClient
               .get<Subcategory>(url, this.httpOptions)
               .pipe(
                 tap(_ => console.log(`Fetched subcategoy ${subcategoryId}`)),
                 catchError(this.handleError<Subcategory>('getSubcategory', new Subcategory()))
               );
  }

  getBook(bookId: number): Observable<Book> {
    const url = `${this.configService.APIBaseUrl}/books/${bookId}`;
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
    }
  }
}
