import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;

  password: string;

  submitted = false;

  errorMessage = '';

  progressMessage = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitForm(ngForm: NgForm) {
    this.submitted = true;
    if (ngForm.valid) {
      // Submit form
      this.progressMessage = 'Athenticating... please wait'
      const { username, password} = this;
      console.log('cred', {username,  password});
      
    }
  }

}
