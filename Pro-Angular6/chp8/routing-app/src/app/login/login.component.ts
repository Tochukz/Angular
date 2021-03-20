import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(event, usernameTarget, passwordTarget) {
    event.preventDefault();
    const username = usernameTarget.value;
    const password = passwordTarget.value;
    const pass = password.split('').map(elem => 'x').join('');
    this.message = `Logging in as ${username} with password ${pass}`;    
    setTimeout(() => {
      localStorage.setItem('routerApp', JSON.stringify({authenticated: true}));
      this.router.navigateByUrl('/');
    }, 3000); 
  }
}
