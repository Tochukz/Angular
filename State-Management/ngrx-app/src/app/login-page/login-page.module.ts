
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { LoginPageComponent } from './login-page.component';
import { AuthEffect } from '../store/effects/auth.effects';
import { authReducer, authReducerKey} from '../store/reducers/auth.reducers';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    BaselayoutModule,
    FormsModule,
    RouterModule,
    EffectsModule.forFeature([ AuthEffect ]),
    StoreModule.forFeature(authReducerKey, authReducer)
  ],
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
