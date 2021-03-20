import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { SubcategoryModule } from './../subcategory/subcategory.module';
import { CategoryComponent } from './category.component';

@NgModule({
  imports: [
    CommonModule,
    BaselayoutModule,
    SubcategoryModule
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
