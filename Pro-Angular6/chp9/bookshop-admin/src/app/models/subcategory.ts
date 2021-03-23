import { Book } from './book';

export class Subcategory {
    subcategoryId: number;

    name: string;

    categoryId: number;

    boooks?: Book[];
}
