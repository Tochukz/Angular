import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, route: ActivatedRoute) { }

  ngOnInit() {
  }

  logout() {
    localStorage.setItem('routerApp', JSON.stringify({authenticated: false}));
    this.router.navigateByUrl('/login');
  }

  get url() {
    return this.router.url;
  }

}
