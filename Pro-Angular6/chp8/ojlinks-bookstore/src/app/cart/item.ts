import { Book } from '../book/book';

export class Item {
    constructor(public book: Book, public quantity: number ) {}
}
