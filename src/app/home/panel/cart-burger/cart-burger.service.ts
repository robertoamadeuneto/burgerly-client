import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CartBurger } from './cart-burger';

const API_CART_BURGERS = 'http://localhost:8080/api/cart-burgers/';

@Injectable({ providedIn: 'root' })
export class CartBurgerService {

    constructor(private httpClient: HttpClient) { }

    create(cartBurger: CartBurger): Observable<CartBurger> {
        return this.httpClient.post<CartBurger>(API_CART_BURGERS, cartBurger);
    }

    delete(cartBurger: CartBurger): Observable<any> {
        return this.httpClient.delete<any>(API_CART_BURGERS + '/' + cartBurger.id)
    }
}
