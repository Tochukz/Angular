import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { BaselayoutModule } from './../baselayout/baselayout.module';

@NgModule({
  imports: [
    CommonModule,
    BaselayoutModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule { }
