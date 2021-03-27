import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { CategoryComponent } from './category.component';



@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    BaselayoutModule
  ],
  exports: [CategoryComponent]
})
export class CategoryModule { }
