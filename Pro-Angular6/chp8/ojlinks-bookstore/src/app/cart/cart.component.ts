import { Component, OnInit } from '@angular/core';

import { CartRepository } from './../repositories/cart.repository';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private categoryRepository: CartRepository) { }

  ngOnInit() {
  }

  get cartItems() {
    return this.categoryRepository.getCartItems();
  }

  get cartTotal() {
    const total  = this.categoryRepository.getCartTotal();
    return `R${Intl.NumberFormat().format(total)}`;
  }

  format(value) {
    return Intl.NumberFormat().format(value);
  }

  removeItem(book) {
    this.categoryRepository.removeItem(book);
  }

  updateQuantity(event, book) {
    const quantity = event.target.value;
    if (quantity > 0) {
      this.categoryRepository.updateQuantity(book, quantity);
    } else {
      this.categoryRepository.removeItem(book);
    }
  }

  // checkout() {

  // }
}
