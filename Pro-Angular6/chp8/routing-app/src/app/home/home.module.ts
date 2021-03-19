import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    BaselayoutModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
