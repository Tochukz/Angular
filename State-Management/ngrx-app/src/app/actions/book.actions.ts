import { createAction, props } from '@ngrx/store';

import { Book } from '../models/book';

export const addBook = createAction('[BookForm Component] AddBook', props<Book>());

export const removeBook = createAction('[BookList Component] RemoveBook', props<{bookId: number}>());

export const editBook = createAction('[BookList Component] EditBook', props<Book>());

export const updatedBook = createAction('[BookForm Component] UpdatedBook', props<Book>());