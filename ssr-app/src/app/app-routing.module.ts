import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './../app/category/category.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

const routes: Routes =  [
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
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: '**',
    component: ContactusComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
