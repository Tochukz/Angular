import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { SubcategoryModule } from './../subcategory/subcategory.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    BaselayoutModule,
    SubcategoryModule
  ]
})
export class CategoryModule { }
