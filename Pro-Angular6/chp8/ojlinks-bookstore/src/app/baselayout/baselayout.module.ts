import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from './../navigation/navigation.module';
import { BaselayoutComponent } from './baselayout.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule
  ],
  declarations: [BaselayoutComponent],
  exports: [BaselayoutComponent]
})
export class BaselayoutModule { }
