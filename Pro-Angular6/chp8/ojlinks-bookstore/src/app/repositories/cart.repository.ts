import { Injectable } from '@angular/core';

import { Item } from '../cart/item';
import { Book } from '../book/book';

@Injectable({
  providedIn: 'root'
})
export class CartRepository {
  private cart: Item[] = [];

  constructor() { }

  addToCart(book: Book) {
    const existingItem = this.cart.find(item => item.book.bookId == book.bookId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push(new Item(book, 1));
    }
  }

  getCartItems(): Item[] {
    return this.cart;
  }

  getCartTotal(): number {
    return this.cart.reduce((prev, next) => prev + next.book.price * next.quantity, 0);
  }

  getItemCount() {
    return this.cart.length;
  }

  removeItem(book: Book) {
    this.cart = this.cart.filter(item => item.book.bookId != book.bookId);
  }

  updateQuantity(book: Book, quantity: number) {
    this.cart.some(item => {
      if (item.book.bookId == book.bookId) {
        item.quantity = quantity;
        return true;
      }
    })
  }
}
