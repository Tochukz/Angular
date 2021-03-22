import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CheckoutComponent } from './checkout.component';
import { BaselayoutModule } from './../baselayout/baselayout.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BaselayoutModule,
    FormsModule,
  ],
  declarations: [CheckoutComponent]
})
export class CheckoutModule { }
