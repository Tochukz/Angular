import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from './../services/category.service';
import { CartRepository } from './../repositories/cart.repository';
import { Book } from '../book/book';
@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  book = new Book();

  constructor(
    private route: ActivatedRoute, 
    private categoryService: CategoryService, 
    private cartRepository: CartRepository) { }

  ngOnInit() {
    const bookId = parseInt(this.route.snapshot.paramMap.get('bookId'));
    if (bookId) {
      this.categoryService.getBook(bookId).subscribe(book => {
        this.book = book;
      });
    }
  }

  addToCart() {
    this.cartRepository.addToCart(this.book);
  }
}
