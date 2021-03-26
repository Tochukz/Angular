import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Book } from './../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private store: Store<{books: Book[], bookToEdit: Book}>) { 
    console.log('store', store);
  
    store.select('books').subscribe(books => {
      console.log('books', books);
      this.books = books;
    });
  }

  ngOnInit(): void {
  }

  editBook(bookId) {
    console.log('type', typeof bookId)
  }

  deleteBook(bookId) {
    console.log('type', typeof bookId)
  }
}
