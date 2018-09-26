import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cart } from './cart';

const API_CARTS = 'http://localhost:8080/api/carts/';

@Injectable({ providedIn: 'root' })
export class CartService {

    cart: Cart;
    cartBurger: any;
    selectedLi: number;
    cartEmitter = new EventEmitter<Cart>();

    constructor(private httpClient: HttpClient) {
    }

    create() {

        let cart = {
            description: 'Cart',
            price: 0.00
        }

        this.httpClient.post<Cart>(API_CARTS, cart).subscribe(data => this.cart = data);
    }

    findById(id: number): Observable<Cart> {
        return this.httpClient.get<Cart>(API_CARTS + '/' + id);
    }

    delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(API_CARTS + '/' + id);
    }

    finish(cart: Cart): Observable<Cart> {
        cart.finished = true;
        return this.httpClient.patch<Cart>(API_CARTS, cart);
    }
}
