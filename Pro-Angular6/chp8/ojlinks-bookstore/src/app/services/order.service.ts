import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { ConfigService } from './config.service';
import { Order } from './../checkout/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.configService.bearerToken}`,
    })
  };

  constructor(private httpClient: HttpClient, private configService: ConfigService) { } 

  postOrder(order): Observable<Order> {
    const url = `${this.configService.APIBaseUrl}/order/create`;
    return this.httpClient
              .post<Order>(url, order, this.httpOptions)
              .pipe(  
                tap(_ => console.log('order posted')),
                catchError(this.handleError<Order>('postOrder', new Order()))
              );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T)
    }
  }
}
