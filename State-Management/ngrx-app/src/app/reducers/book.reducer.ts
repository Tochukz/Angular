import { createReducer, on, Action } from '@ngrx/store';

import { addBook, removeBook, editBook} from './../actions/book.actions';
import { Book } from '../models/book';


export interface State {
  books: Book[];
  bookToEdit: Book | {};
}

const initialState: State = {
  books: [
    new Book('Pro Angular 6', 'Adam Freemae', 1),
    new Book('Pro Express.js', 'Azat Mardan', 2),
  ],
  bookToEdit: {}
};

const reducer = createReducer(
  initialState,
  on(addBook, (state, book) => {
    console.log('adding', book );
    const bookId = state.books.length  + 1;
    const newBook = {...book, bookId };
    const books = [...state.books, newBook]
    return {
      ...state,
      books,
    };
  }),
  on(removeBook, (state, { bookId }) => {
    const books = state.books.filter(bk => bk.bookId != bookId);
    return {
      ...state,
      books,
    };
  }),
  on(editBook, (state, book) => {
    const bookToEdit  = {...book};
    return {
      ...state,
      bookToEdit
    };
  })
);

export function bookReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}

export const bookReducerKey = 'book';

