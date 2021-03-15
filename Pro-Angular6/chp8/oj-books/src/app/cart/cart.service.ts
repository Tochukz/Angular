import { Injectable } from '@angular/core';
import { CartItem } from './cart.item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];

  addToCart(cartItem: CartItem) {
    const exitingItem = this.cartItems.find(item => item.book.bookId == cartItem.book.bookId);
    if (exitingItem) {
      exitingItem.quantity += 1; 
      return;
    }
    this.cartItems.push(cartItem);
  }

  removeFromCart(bookId) {
    this.cartItems = this.cartItems.filter(item => item.book.bookId != bookId);
  }

  updateItemQunatity(bookId: number, quantity: number) {
    this.cartItems = this.cartItems.map(item => {
        if (item.book.bookId == bookId) {
            item.quantity = quantity;
        }
        return item;
    });
  }

  emptyCart() {
    this.cartItems = [];
  }

  calculateTotal() {
    return this.cartItems.reduce((prev, next) => {
      return prev + next.book.price * next.quantity;
    }, 0);
  }

  countItems() {
    return this.cartItems.length;
  }
}
