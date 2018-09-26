import { CartBurger } from '../cart-burger/cart-burger';
import { Ingredient } from '../ingredient/ingredient';

export class CartBurgerIngredient {
    id: number;
    cartBurger: CartBurger;
    ingredient: Ingredient;

    constructor() {

    }
}