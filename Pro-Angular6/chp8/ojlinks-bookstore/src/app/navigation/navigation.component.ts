import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from './../repositories/category.repository';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit() {
  }

  get categories() {
    return this.categoryRepository.getCategories();
  }
}
