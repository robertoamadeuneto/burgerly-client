import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingredient } from "./ingredient";
import { CartBurgerIngredient } from '../cart-burger-ingredient/cart-burger-ingredient';
import { CartBurgerIngredientService } from '../cart-burger-ingredient/cart-burger-ingredient.service';

const API_INGREDIENT = 'http://localhost:8080/api/ingredients/';

@Injectable({ providedIn: 'root' })
export class IngredientService {

    constructor(private httpClient: HttpClient,
    private cartBurgerIngredientService: CartBurgerIngredientService) { }

    findAll(): Observable<Ingredient[]> {
        return this.httpClient.get<Ingredient[]>(API_INGREDIENT);
    }

    addToCartBurger(cartBurgerIngredient: CartBurgerIngredient) {
        return this.cartBurgerIngredientService.create(cartBurgerIngredient);
    }

    removeFromCartBurger(cartBurgerIngredient: CartBurgerIngredient) {
        return this.cartBurgerIngredientService.delete(cartBurgerIngredient);
    }
}
