import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { NotfoundComponent } from './notfound.component';

@NgModule({
  imports: [
    CommonModule,
    BaselayoutModule
  ],
  declarations: [NotfoundComponent]
})
export class NotfoundModule { }
