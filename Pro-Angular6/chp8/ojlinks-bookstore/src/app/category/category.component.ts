import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from './../repositories/category.repository';
@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit() {
  }

  get subcategories() {
    return this.categoryRepository.getActiveCategory().subcategories;
  }

  get activeCategory() {
    return this.categoryRepository.getActiveCategory();
  }
}
