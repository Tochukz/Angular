import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { LoginPageComponent } from './login-page.component';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    BaselayoutModule,
    FormsModule,
  ],
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
