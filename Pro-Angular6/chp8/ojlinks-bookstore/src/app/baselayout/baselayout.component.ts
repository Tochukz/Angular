import { Component, OnInit } from '@angular/core';

import { CartRepository } from './../repositories/cart.repository';
@Component({
  selector: 'baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.css']
})
export class BaselayoutComponent implements OnInit {

  constructor(private cartRepository: CartRepository) { }

  ngOnInit() {
  }

  get totalItems() {
    return this.cartRepository.getItemCount();
  }

  get cartTotal() {
    const total = this.cartRepository.getCartTotal();
    return `R${Intl.NumberFormat().format(total)}`;
  }

}
