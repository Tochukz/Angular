import { Subcategory } from './../subcategory/subcategory.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from './category.model';

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
    const endpoint = 'http://ojlinks-api.test:8084/api/categories';
    return this.httpClient
               .get<Category[]>(endpoint, this.httpOptions)
               .pipe(
                   tap(_ => console.log('fetched categories')),
                   catchError(this.handleError<Category[]>('getCategories', []))
               );
  }

  getBooks(subcategoryId: number): Observable<Subcategory> {
    const endpoint = `https://ojlinks-api.test:8084/api/subcategories/${subcategoryId}`;
    return this.httpClient
               .get<Subcategory>(endpoint, this.httpOptions)
               .pipe(
                 tap(_ => console.log('fetched subcategory')),
                 catchError(this.handleError<Subcategory>('getBooks', null))
               );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(error);

        return of(result as T)
    }
  }

  /*
  // Using mock data
  getCategories(): Observable<Category[]> {
    return from([this.categories]);
  }
  
  private categories = [
      {
          "categoryId": 1,
          "name": "Engineering",
          "createdAt": "2020-12-18T14:15:26.000Z",
          "updatedAt": "2020-12-18T14:15:26.000Z",
          "subcategories": [
              {
                  "subcategoryId": 1,
                  "categoryId": 1,
                  "name": "Mechanical",
                  "createdAt": "2020-12-18T14:15:26.000Z",
                  "updatedAt": "2020-12-18T14:15:26.000Z"
              },
              {
                  "subcategoryId": 2,
                  "categoryId": 1,
                  "name": "Structural",
                  "createdAt": "2020-12-18T14:15:26.000Z",
                  "updatedAt": "2020-12-18T14:15:26.000Z"
              },
          ]
      },
      {
          "categoryId": 2,
          "name": "Medicine",
          "createdAt": "2020-12-18T14:15:26.000Z",
          "updatedAt": "2020-12-18T14:15:26.000Z",
          "subcategories": [
              {
                  "subcategoryId": 4,
                  "categoryId": 2,
                  "name": "Surgery",
                  "createdAt": "2020-12-18T14:15:26.000Z",
                  "updatedAt": "2020-12-18T14:15:26.000Z"
              },
          ]
      },
     
  ]

  */
}
