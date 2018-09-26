import { CartBurger } from '../cart-burger/cart-burger';

export class Cart {
    id: number;
    description: string;
    price: number;
    finished: boolean;
    cartBurgers: CartBurger[];

    constructor() {

    }
}