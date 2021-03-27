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

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.subscribe(store => {
     
      const auth = store['auth'];

      console.log('store', store, (auth && auth['authenticated']));
      if (auth && auth['authenticated']) {
        this.activityMsg = '';
        this.errorMsg = '';
  
        this.updateStorage(auth);

        this.router.navigateByUrl('/');
      } else if (auth && !auth['authenticated']) {
        this.errorMsg = auth['errorMsg'];
      }
    })
  }

  updateStorage(auth) {
    const localStore = localStorage.getItem('store') || '{}';
    const store = JSON.parse(localStore);
    const updatedStore = Object.assign(store, auth);
    console.log('updting to', store, 'suing', updatedStore);
    localStorage.setItem('store', JSON.stringify(updatedStore));
  }

  submit() { 
    const {username, password} = this;   
    this.errorMsg = '';
    this.activityMsg = 'Authenticating... please wait';
    this.store.dispatch(loginPageAction({username, password}))
  }
}
