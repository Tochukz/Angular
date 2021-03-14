import { Subcategory } from './../subcategory/subcategory.model';
import { CategoryService } from './category.service';
import { Injectable } from '@angular/core';

import { Category } from './category.model';

@Injectable()
export class CategoryRepository {
    private categories: Category[] = [];
    private subcategories: Subcategory[] = [];
    private activeCategory: Category = new Category(0, 'empty', []);


    constructor(private categoryService: CategoryService) {
      categoryService.getCategories().subscribe(data => {
        this.categories = data;
        data.forEach(cat => {          
          this.subcategories = this.subcategories.concat(cat.subcategories);
        });

        const rand  = Math.floor(Math.random() * 10);
    
        const randonIndex = rand > 8 ? rand - 1 : rand;
        if (data[randonIndex]) {
          this.activeCategory = data[randonIndex];
        }        
      });
    }

    getCategories() {
      return this.categories;
    };

    getSubcategories() {
      return this.subcategories;
    }

    getActiveCategory() {
      return this.activeCategory;
    }

    changeActiveCategory(categoryId) {
      this.activeCategory = this.categories.find(cat => cat.categoryId == categoryId);
    }
}