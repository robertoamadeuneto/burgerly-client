import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CartBurgerIngredient } from './cart-burger-ingredient';

const API_CART_BURGER_INGREDIENTS = 'http://localhost:8080/api/cart-burger-ingredients/';

@Injectable({ providedIn: 'root' })
export class CartBurgerIngredientService {

    constructor(private httpClient: HttpClient) { }

    create(cartBurgerIngredient: CartBurgerIngredient): Observable<CartBurgerIngredient> {
        return this.httpClient.post<CartBurgerIngredient>(API_CART_BURGER_INGREDIENTS, cartBurgerIngredient);
    }

    delete(cartBurgerIngredient: CartBurgerIngredient): Observable<any> {
        return this.httpClient.delete<any>(API_CART_BURGER_INGREDIENTS + '/' + cartBurgerIngredient.id)
    }
}
