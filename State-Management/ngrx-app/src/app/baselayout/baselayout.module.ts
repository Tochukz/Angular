import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaselayoutComponent } from './baselayout.component';


@NgModule({
  declarations: [BaselayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BaselayoutComponent]
})
export class BaselayoutModule { }
