
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CategoryComponent } from './category.component';
import { CategoryRepository } from './category.repository';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [ CategoryRepository ],
  declarations: [CategoryComponent],
  exports: [ CategoryComponent ]
})
export class CategoryModule { }
