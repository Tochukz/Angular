import { Subcategory } from './../subcategory/subcategory.model';
import { Component, OnInit } from '@angular/core';

import { CategoryRepository } from './category.repository';
import { Category } from './category.model';

@Component({
  selector: 'category-list',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit() {
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  get subcategories(): Array<Subcategory> {
    return this.categoryRepository.getSubcategories();
  }

  get activeCategoy(): Category {
    return this.categoryRepository.getActiveCategory();
  }

  setActive(categoryId) {
    this.categoryRepository.setActive(categoryId);
  }
}
