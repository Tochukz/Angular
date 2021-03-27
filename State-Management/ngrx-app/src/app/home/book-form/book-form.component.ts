import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Book } from './../../models/book';
import { addBook, updatedBook } from '../../store/actions/book.actions';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  book = new Book('', '');

  submitted = false;

  constructor(private store: Store) { 
    store.pipe().subscribe(st => {
      const book = st['book']['bookToEdit'];
      if (book) {
        this.book = {...book};
      }
    });
  }

  ngOnInit(): void {
  }

  submitBook(ngForm: NgForm) {    
    this.submitted = true;

    if (ngForm.invalid) {      
      return false;
    }
  
    if (this.book.bookId) {
      this.store.dispatch(updatedBook(this.book));      
    } else {
      this.store.dispatch(addBook(this.book));      
    }   

    this.book =  new Book('', '');
    this.submitted = false;
  }
}
