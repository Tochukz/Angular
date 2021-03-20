import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryComponent } from './subcategory.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubcategoryComponent],
  exports: [SubcategoryComponent]
})
export class SubcategoryModule { }
