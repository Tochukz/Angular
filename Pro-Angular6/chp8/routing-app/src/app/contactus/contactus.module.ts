
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus.component';

import { BaselayoutModule } from './../baselayout/baselayout.module';

@NgModule({
  imports: [
    CommonModule,
    BaselayoutModule
  ],
  declarations: [ContactusComponent]
})
export class ContactusModule { }
