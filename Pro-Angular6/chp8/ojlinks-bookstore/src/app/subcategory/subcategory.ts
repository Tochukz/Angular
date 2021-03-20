import { Book } from './../book/book';
export class Subcategory {
    subcategoryId: number;

    categoryId: number;

    name: string;

    books?: Book[] = []
}
