import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    BaselayoutModule,
    RouterModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
