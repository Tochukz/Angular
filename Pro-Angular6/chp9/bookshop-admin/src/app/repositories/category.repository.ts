import { Injectable } from '@angular/core';

import { CategoryService } from './../services/category.service';
import { Category } from './../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryRepository {
  private categories: Category[] = [];
  private activeCategory = new Category();

  constructor(private categoryService: CategoryService) { 
    this.categoryService.fetchCategories().subscribe(categories => {
      this.categories = categories;

      let randIndex;
      do {
        randIndex = Math.floor(Math.random() * 10)
      } while(randIndex >= categories.length);
      this.activeCategory = categories[randIndex];
    });
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getActiveCategory(): Category {
    return this.activeCategory;
  }

  setActivateCategory(categoryId: number) {
    const category = this.categories.find(cat => cat.categoryId == categoryId);
    if (category) {
      this.activeCategory = category;
    }
  }
}
