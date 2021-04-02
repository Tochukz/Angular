import { Book } from './book';

export class Subcategory {
    subcategoryId: number = 0;

    categoryId: number = 0;

    name: string = '';

    books: Book[] = []
}
