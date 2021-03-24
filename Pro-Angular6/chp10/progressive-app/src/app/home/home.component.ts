import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from './../repositories/category.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit() {
  }

  get activeCategory() {
    return this.categoryRepository.getActiveCategory();
  }
}
