import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { AboutusComponent } from './aboutus.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, // This router module is imported here to main routerLink attribute work when it is applied to any HTML element
    BaselayoutModule
  ],
  declarations: [AboutusComponent],
})
export class AboutusModule { }
