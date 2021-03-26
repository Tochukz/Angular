import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus.component';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { CounterModule } from './../counter/counter.module';

@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CommonModule,
    BaselayoutModule,
    CounterModule
  ]
})
export class ContactusModule { }
