import { RouterModule } from '@angular/router';
import { BaselayoutModule } from './../baselayout/baselayout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';

@NgModule({
  imports: [
    CommonModule,
    //RouterModule,
    BaselayoutModule,
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
