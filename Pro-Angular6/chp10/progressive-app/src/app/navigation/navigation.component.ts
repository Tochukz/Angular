import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryRepository } from './../repositories/category.repository';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoryRepository: CategoryRepository) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.categoryRepository.setActiveCateogory(parseInt(param.categoryId));
    });
  }

  get categories() {
    return this.categoryRepository.getCategories();
  }

  isActiveCategory(categoryId) {
    return this.categoryRepository.getActiveCategory().categoryId == categoryId;
  }
}
