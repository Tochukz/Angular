
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { ContactusComponent } from './contactus.component';

@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CommonModule,
    BaselayoutModule
  ]
})
export class ContactusModule { }
