import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment as env} from './../../environments/environment';
import { Category } from './../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  fetchCategories(): Observable<Category[]> {
    const url = `${env.APIBaseUrl}/categories`;
    return this.http
               .get<Category[]>(url)
               .pipe(
                 tap(_ => console.log('Fetched categories'))
               );

  }
}
