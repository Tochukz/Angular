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

  order = {};

  constructor(private cartRepository: CartRepository, private orderService: OrderService ) { }

  ngOnInit() {
  }

  submitOrder(ngForm: NgForm) {
    this.submitted = true; 
    console.log('form', ngForm);
    if (ngForm.valid) {
      this.posting = true;
      const order = new Order([], new Contact());
      order.items = this.cartRepository.getCartItems();
      for(let key in ngForm.value) {
        order.contact[key] = ngForm.value[key];
      }
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
