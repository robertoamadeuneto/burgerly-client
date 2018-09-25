import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Burger } from "./burger";
import { CartService } from '../cart/cart.service';

const API_BURGERS = 'http://localhost:8080/api/burgers/';
const API_CART_BURGERS = 'http://localhost:8080/api/cart-burgers/';

@Injectable({ providedIn: 'root' })
export class BurgerService {

    constructor(private httpClient: HttpClient,
        private cartService: CartService) { }

    findAll(): Observable<Burger[]> {
        return this.httpClient.get<Burger[]>(API_BURGERS);
    }

    addToCart(burger: Burger): Observable<any> {

        let cartBurger = {
            cart: this.cartService.cart,
            burger: burger
        }

        return this.httpClient.post<Burger[]>(API_CART_BURGERS, cartBurger);
    }
}
