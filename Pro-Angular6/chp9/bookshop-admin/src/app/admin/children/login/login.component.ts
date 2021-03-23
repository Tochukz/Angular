import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CategoryService } from './../../../services/category.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;

  password: string;

  submitted = false;

  submitting = false;

  errorMessage = '';

  progressMessage = '';

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
  }

  submitForm(ngForm: NgForm) {
    this.submitted = true;   
    if (ngForm.valid) {     
      this.submitting = true;
      this.progressMessage = 'Athenticating... please wait'
      const { username, password} = this;
      this.categoryService
          .login({username, password})
          .subscribe(data => {
            let store = JSON.parse(localStorage.getItem('store') || '{}');
            store = Object.assign(store, data, {authenticated: true});
            localStorage.setItem('store', JSON.stringify(store));
            this.submitting = false;
            this.progressMessage = '';
            this.router.navigateByUrl('/admin');
          });
      
    }
  }

}
