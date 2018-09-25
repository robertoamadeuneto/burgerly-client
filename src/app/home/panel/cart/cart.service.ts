import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart';

const API_CARTS = 'http://localhost:8080/api/carts/';

@Injectable({ providedIn: 'root' })
export class CartService {

    cart: Cart[];
    cartBurger: any;
    selectedLi: number;

    constructor(private httpClient: HttpClient) {
    }

    create() {

        let cart = {
            description: 'Cart',
            price: 0.00
        }

        this.httpClient.post<Cart[]>(API_CARTS, cart).subscribe(data => {
            this.cart = data;
        });
    }

    findById(id: number) {
        return this.httpClient.get<Cart[]>(API_CARTS + '/' + id);
    }

    delete(id: number) {
        return this.httpClient.delete<any>(API_CARTS + '/' + id);
    }
}
