import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { login } from '../actions/login-page.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: string;

  password: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  submit() { 
    const {username, password} = this;
    this.store.dispatch(login({username, password}))
  }
}
