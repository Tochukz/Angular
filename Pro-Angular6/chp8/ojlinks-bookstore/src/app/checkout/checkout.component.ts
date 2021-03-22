import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { OrderService } from './../services/order.service';
import { CartRepository } from './../repositories/cart.repository';
import { Order } from './order';
import { Contact } from './contact';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  posting = false;
  
  submitted = false;

  orderSuccessful = false;

  contact = new Contact();

  constructor(private cartRepository: CartRepository, private orderService: OrderService ) { }

  ngOnInit() {
  }

  submitOrder(ngForm: NgForm) {
    this.submitted = true; 
    if (ngForm.valid) {
      this.posting = true;
      const order = new Order([], this.contact);
      order.items = this.cartRepository.getCartItems();
      this.orderService
           .postOrder(order)
           .subscribe(response => {
             console.log('response', response);
             this.posting = false;
             this.orderSuccessful = true;
             this.cartRepository.emptyCart();
           });
    }
  }
}
