import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from './../repositories/category.repository';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit() {
  }

  get categories() {
    return this.categoryRepository.getCategories();
  }

  isActiveCategory(categoryId: number) {
    return this.categoryRepository.getActiveCategory().categoryId == categoryId;
  }

}
