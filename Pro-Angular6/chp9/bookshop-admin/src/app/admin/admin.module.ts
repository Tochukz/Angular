import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { OrderComponent } from './children/order/order.component';
import { FormsModule} from '@angular/forms';
import { BookComponent } from './children/book/book.component';
import { BooklistComponent } from './children/booklist/booklist.component';
import { LoginComponent } from './children/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookComponent,
      }, 
      {
        path: 'order',
        component: OrderComponent
      },    
      {
        path: 'booklist',
        component: BooklistComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '**',
        component: BooklistComponent
      }
    ])
  ],
  declarations: [AdminComponent, OrderComponent, BookComponent, BooklistComponent, LoginComponent]
})
export class AdminModule { }
