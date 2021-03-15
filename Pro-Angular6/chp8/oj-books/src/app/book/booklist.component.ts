import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from '../category/category.repository';

@Component({
  selector: 'book-list',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit() {

  }

  get activeCategory() {
    return this.categoryRepository.getActiveCategory();
  }

}
