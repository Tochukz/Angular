import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private connEvent: Subject<boolean>;
  
  constructor() { 
    this.connEvent = new Subject<boolean>();
  
    window.addEventListener("online", e => this.handleConnectionChange(e));
    window.addEventListener("offline", e => this.handleConnectionChange(e));
  }

  private handleConnectionChange(event) {
    console.log('connecton changes', event);
    this.connEvent.next(this.connected);
  }

  get connected(): boolean {
    return window.navigator.onLine;
  }

  get connectionEvent(): Observable<boolean> {
    return this.connEvent;
  }

}
