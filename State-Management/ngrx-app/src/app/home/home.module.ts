import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { BaselayoutModule } from './../baselayout/baselayout.module';
import { CounterModule } from './../counter/counter.module';
import { HomeComponent } from './home.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';

import { bookReducerKey, bookReducer } from './../reducers/book.reducer';

@NgModule({
  declarations: [HomeComponent, BookFormComponent, BookListComponent],
  imports: [
    CommonModule,
    BaselayoutModule,
    FormsModule,
    StoreModule.forFeature(bookReducerKey, bookReducer),
    CounterModule
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
