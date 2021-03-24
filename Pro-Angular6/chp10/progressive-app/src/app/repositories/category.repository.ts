import { Injectable } from '@angular/core';

import { CategoryService } from './../services/category.service';
import { Category } from './../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryRepository {
  private categories: Category[] = [];

  private activeCategory: Category = new Category();

  constructor(categoryService: CategoryService) { 
    categoryService.fetchCategories().subscribe(categories => {
      this.categories = categories;

      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * 10);
      } while(randomIndex >= categories.length);

      this.activeCategory = this.categories[randomIndex];
    });
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getActiveCategory(): Category {
    return this.activeCategory;
  }

  setActiveCateogory(categoryId: number) {
    const category = this.categories.find(cat => cat.categoryId == categoryId);
    if (category) {
      this.activeCategory = category;
    }
  }
}
