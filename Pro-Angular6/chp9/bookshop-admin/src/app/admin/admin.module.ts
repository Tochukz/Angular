import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { OrderComponent } from './children/order/order.component';
import { BookComponent } from './children/book/book.component';
import { BooklistComponent } from './children/booklist/booklist.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'book',
        component: BookComponent,
      }, 
      {
        path: 'booklist',
        component: BooklistComponent
      }
    ])
  ],
  declarations: [AdminComponent, OrderComponent, BookComponent, BooklistComponent]
})
export class AdminModule { }
