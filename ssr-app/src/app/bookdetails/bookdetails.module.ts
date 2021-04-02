import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { BookdetailsComponent } from './bookdetails.component';



@NgModule({
  declarations: [BookdetailsComponent],
  imports: [
    CommonModule,
    BaselayoutModule
  ],
  exports: [BookdetailsComponent]
})
export class BookdetailsModule { }
