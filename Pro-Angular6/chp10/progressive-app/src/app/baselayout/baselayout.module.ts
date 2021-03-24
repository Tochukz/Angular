import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NavigationModule } from './../navigation/navigation.module';
import { BaselayoutComponent } from './baselayout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule
  ],
  declarations: [BaselayoutComponent],
  exports: [BaselayoutComponent]
})
export class BaselayoutModule { }
