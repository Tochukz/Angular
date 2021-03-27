import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.scss']
})
export class BaselayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    const localStore = localStorage.getItem('store') || '{}';
    const store = JSON.parse(localStore);
    store.authenticated = false;
    store.token  = '';
    localStorage.setItem('store', JSON.stringify(store));

    this.router.navigateByUrl('/login')
  }
}
