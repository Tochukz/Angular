import { Injectable } from '@angular/core';
import { Category } from './../models/category';
import { CategoryService } from './../services/category.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryRepository {
  private categories: Category[] = [];
  private activeCategory: Category = new Category();

  constructor(private categoryService: CategoryService) { 
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      
      let randonIndex;
      do {
        randonIndex = Math.floor(Math.random() * 10);
      } while (randonIndex >= categories.length);

      this.activeCategory = categories[randonIndex];       
    });
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getActiveCategory(): Category {
    return this.activeCategory;
  }

  setActiveCategory(categoryId: number) {
    const category = this.categories.find(cat => cat.categoryId == categoryId);
    if (category) {
      this.activeCategory = category;
    }
  }
}