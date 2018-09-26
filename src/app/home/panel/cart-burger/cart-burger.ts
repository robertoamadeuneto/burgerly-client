import { Burger } from '../burger/burger';
import { Cart } from '../cart/cart';
import { CartBurgerIngredient } from '../cart-burger-ingredient/cart-burger-ingredient';

export class CartBurger {
    id: number;
    cart: Cart;
    burger: Burger;
    price: number;
    cartBurgerIngredients: CartBurgerIngredient[];

    constructor() {

    }
}