import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { CategoryComponent } from './category.component';

import { categoryReducerKey, categoryReducers } from './../store/reducers/category.reducers';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    BaselayoutModule,
    StoreModule.forFeature(categoryReducerKey, categoryReducers)
  ],
  exports: [CategoryComponent]
})
export class CategoryModule { }
