import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BaselayoutModule
  ],
  declarations: [CartComponent],
  exports: [CartComponent]
})
export class CartModule { }
