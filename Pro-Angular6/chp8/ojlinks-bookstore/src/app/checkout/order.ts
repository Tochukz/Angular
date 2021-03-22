import { Item } from '../cart/item';
import { Contact } from './contact';
export class Order {
    constructor(public items: Item[], public contact?: Contact) {}
}
