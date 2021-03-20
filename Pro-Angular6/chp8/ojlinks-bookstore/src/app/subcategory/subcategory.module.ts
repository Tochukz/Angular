
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookModule } from './../book/book.module';
import { SubcategoryComponent } from './subcategory.component';

@NgModule({
  imports: [
    CommonModule,
    BookModule
  ],
  declarations: [SubcategoryComponent],
  exports: [SubcategoryComponent]
})
export class SubcategoryModule { }
