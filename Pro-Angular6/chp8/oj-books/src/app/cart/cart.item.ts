import { Book } from '../book/book.model';

export class CartItem {
    constructor(public book: Book, public quantity: number) {}
}
