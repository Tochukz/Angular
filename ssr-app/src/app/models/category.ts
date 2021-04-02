import { Subcategory } from './subcategory';

export class Category {
    categoryId: number = 0;

    name: string = '';

    subcategories: Subcategory[] = [];
}
