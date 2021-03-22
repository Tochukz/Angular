import { CategoryComponent } from '../category/category.component';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';
import { CartComponent } from './../cart/cart.component';
import { CheckoutComponent } from './../checkout/checkout.component';

export default [
  {
    path: '',
    component: CategoryComponent
  },
  {
    path: 'category/:categoryId',
    component: CategoryComponent
  },
  {
    path: 'book/:bookId',
    component: BookdetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
]