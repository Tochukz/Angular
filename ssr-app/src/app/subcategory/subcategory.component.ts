import { Component, OnInit , Input} from '@angular/core';

import { CategoryService } from './../services/category.service';
import { Subcategory } from './../models/subcategory';
import { Book } from './../models/book';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  @Input() subcategory: Subcategory = new Subcategory();

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
