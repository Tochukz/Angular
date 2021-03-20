import { Component, OnInit, Input } from '@angular/core';

import { CategoryService } from './../services/category.service';
import { Subcategory } from './subcategory';
import { Book } from '../book/book';

@Component({
  selector: 'subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  @Input() subcategory: Subcategory;

  books: Book[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService
        .getSubcategory(this.subcategory.subcategoryId)
        .subscribe(subcategory => {
          this.books = subcategory.books;
        });
  }
}
