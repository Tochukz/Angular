import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    let store = JSON.parse(localStorage.getItem('store') || '{}');
    store.token = '';
    store.authenticated = false;
    localStorage.setItem('store', JSON.stringify(store));
    this.router.navigateByUrl('/admin/login');
  }
}
