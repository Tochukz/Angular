import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryComponent } from './subcategory.component';

import { BookModule } from './../book/book.module';


@NgModule({
  declarations: [SubcategoryComponent],
  imports: [
    CommonModule,
    BookModule
  ],
  exports: [SubcategoryComponent]
})
export class SubcategoryModule { }
