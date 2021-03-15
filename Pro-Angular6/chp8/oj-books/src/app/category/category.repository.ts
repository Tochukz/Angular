import { Injectable } from '@angular/core';

import { Category } from './category.model';
import { Subcategory } from './../subcategory/subcategory.model';
import { Book } from '../book/book.model';
import { CategoryService } from './category.service';

@Injectable()
export class CategoryRepository {
    private categories: Category[] = [];
    private subcategories: Subcategory[] = [];
    private books: Book[] = []
    private activeCategory: Category = new Category(0, 'empty', []);


    constructor(private categoryService: CategoryService) {
      categoryService.getCategories().subscribe(data => {
        this.categories = data.map(cat => {
          cat.dropDrown = false;
          return cat;
        });
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

    getBooks(subCategoryId) {
      this.categoryService.getBooks(subCategoryId).subscribe(data => {
        this.books = data.books;
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

    setActive(categoryId) {
      this.categories = this.categories.map(cat => {
        if (cat.categoryId == categoryId) {
          cat.dropDrown = true;
        } else {
          cat.dropDrown = false;
        }
        return cat;
      });
    }
}