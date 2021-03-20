import { Component, OnInit, Input } from '@angular/core';

import { Book } from './book';
import { CartRepository } from './../repositories/cart.repository';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor(private cartRepository: CartRepository) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartRepository.addToCart(this.book);
  }
}
