import { CategoryComponent } from '../category/category.component';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';

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
  }
];