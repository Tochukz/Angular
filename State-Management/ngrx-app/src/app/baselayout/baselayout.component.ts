import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { resetAuthToken } from './../store/actions/login-page.actions'
@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.scss']
})
export class BaselayoutComponent implements OnInit {

  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
  }

  logout() {  
    this.store.dispatch(resetAuthToken());    
    this.router.navigateByUrl('/login');    
  }
}
