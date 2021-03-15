import { Book } from '../book/book.model';

export class Subcategory {
    constructor(
        public subcategoryId: number,
        public categoryId: number,
        public name: string,
        public books?: Book[]
    ){}
}