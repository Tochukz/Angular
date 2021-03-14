import { Subcategory } from './../subcategory/subcategory.model';

export class Category {
    constructor(
        public categoryId: number,
        public name: string,
        public subcategories: Subcategory[]
    ){}
}