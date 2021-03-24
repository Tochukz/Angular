import { ConnectionService } from './../services/connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.scss']
})
export class BaselayoutComponent implements OnInit {

  public internetConnected: Boolean;

  constructor(connectionService: ConnectionService) { 
    this.internetConnected = window.navigator.onLine;
    connectionService.connectionEvent.subscribe(status => {
      this.internetConnected = status;
    });
  }

  ngOnInit() {
  }
}
