

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Category } from './../models/category';
import { fetchCategoriesAction } from './../store/actions/category.actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  errorMsg = '';

  constructor(private store: Store<{category: Category[]}>) {
    store.select('category').subscribe(category => {          
      if (Array.isArray(category['categories']) && category['categories'].length > 0) {
        this.categories = category['categories'];
      } else if(category['errorMsg']) {
        this.errorMsg = category['errorMsg'];
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchCategoriesAction());
  }
}
