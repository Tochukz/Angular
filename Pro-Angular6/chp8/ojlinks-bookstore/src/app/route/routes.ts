import { CategoryComponent } from '../category/category.component';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';
import { CartComponent } from './../cart/cart.component';

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
  }
];