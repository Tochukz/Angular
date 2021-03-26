import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { removeBook, editBook  } from './../../actions/book.actions';
import { Book } from './../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private store: Store) { 
    store.pipe().subscribe(str => {      
      this.books = str['book']['books'];
    });
  }

  ngOnInit(): void {
  }

  editBook(bookId) {   
    const book = this.books.find(bk => bk.bookId == bookId);
    if (book) {
      this.store.dispatch(editBook(book))
    }    
  }

  deleteBook(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }
}
