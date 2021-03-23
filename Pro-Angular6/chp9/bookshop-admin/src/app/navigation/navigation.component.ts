import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

import { CategoryRepository } from './../repositories/category.repository';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(route: ActivatedRoute, private categoryRepository: CategoryRepository) { 
    route.params.subscribe(param => {
      const categoryId = parseInt(param.categoryId);
      if (categoryId) {
        this.categoryRepository.setActivateCategory(categoryId);
      }
    });
  }

  ngOnInit() {
  }

  get categories () {
    return this.categoryRepository.getCategories();
  }

  isActiveCategory(categoryId) {
    return this.categoryRepository.getActiveCategory().categoryId == categoryId;
  }
}
