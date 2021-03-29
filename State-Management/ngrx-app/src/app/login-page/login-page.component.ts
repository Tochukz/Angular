import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { loginPageAction } from '../store/actions/login-page.actions';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: string;

  password: string;

  errorMsg = '';

  activityMsg = '';

  constructor(private store: Store<{auth: object}>, private router: Router) { }

  ngOnInit(): void {
    this.store.select('auth').subscribe(auth => {
      if (auth['authenticated']) {
        this.activityMsg = '';
        this.errorMsg = '';        
        this.router.navigateByUrl('/');
      } else if (auth['errorMsg']) {
        this.errorMsg = auth['errorMsg'];
        this.activityMsg = '';
      }
    })
  }

  submit() { 
    const {username, password} = this;   
    this.errorMsg = '';
    this.activityMsg = 'Authenticating... please wait';
    this.store.dispatch(loginPageAction({username, password}))
  }
}
