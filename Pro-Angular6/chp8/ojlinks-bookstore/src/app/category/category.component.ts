import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryRepository } from './../repositories/category.repository';
@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  activeCategoryId: number;

  constructor(private route: ActivatedRoute, private categoryRepository: CategoryRepository) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const categoryId = parseInt(param.categoryId)
      if (categoryId) {
        console.log('init', categoryId);
        this.categoryRepository.setActiveCategory(categoryId);
        this.activeCategoryId = categoryId;
      }
    });
  }

  get subcategories() {
    return this.categoryRepository.getActiveCategory().subcategories;
  }

  get activeCategory() {
    return this.categoryRepository.getActiveCategory();
  }
}
