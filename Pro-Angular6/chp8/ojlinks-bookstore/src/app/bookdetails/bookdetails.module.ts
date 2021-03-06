import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { BookdetailsComponent } from './bookdetails.component';

@NgModule({
  imports: [
    CommonModule,
    BaselayoutModule,
    RouterModule
  ],
  declarations: [BookdetailsComponent]
})
export class BookdetailsModule { }
