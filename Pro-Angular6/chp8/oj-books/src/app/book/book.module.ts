import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BooklistComponent } from './booklist.component';

@NgModule({
  imports: [
    CommonModule,    
  ],
  declarations: [BookComponent, BooklistComponent],
  exports: [BooklistComponent]
})
export class BookModule { }
