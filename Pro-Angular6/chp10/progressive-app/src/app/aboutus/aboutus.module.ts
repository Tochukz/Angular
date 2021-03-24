import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';

import { BaselayoutModule } from './../baselayout/baselayout.module';

@NgModule({
  imports: [
    CommonModule,
    BaselayoutModule
  ],
  declarations: [AboutusComponent]
})
export class AboutusModule { }
