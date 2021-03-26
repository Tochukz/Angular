import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Book } from './../../models/book';
import { addBook } from './../../actions/book.actions';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  book = new Book('', '');

  submitted = false;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  submitBook(ngForm: NgForm) {
    console.log('form', ngForm);
    this.submitted = true;
    
    if (ngForm.invalid) {      
      return false;
    }
    console.log({book: this.book});
    this.store.dispatch(addBook(this.book));
  }
}
