import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Burger } from "./burger";
import { CartService } from '../cart/cart.service';
import { ActionsService } from '../../actions/actions.service';

const API_BURGERS = 'http://localhost:8080/api/burgers/';
const API_CART_BURGERS = 'http://localhost:8080/api/cart-burgers/';
const API_CART_BURGER_INGREDIENTS = 'http://localhost:8080/api/cart-burger-ingredients/';

@Injectable({ providedIn: 'root' })
export class BurgerService {

    cartEmitter = new EventEmitter();

    constructor(private httpClient: HttpClient,
        private cartService: CartService,
        private actionsService: ActionsService) { }

    findAll(): Observable<Burger[]> {
        return this.httpClient.get<Burger[]>(API_BURGERS);
    }

    addToCart(burger: Burger) {

        let cartBurger = {
            cart: this.cartService.cart,
            burger: burger
        }

        this.httpClient.post<Burger[]>(API_CART_BURGERS, cartBurger)
            .subscribe(() => {
                this.cartService.findById(this.cartService.cart['id']).subscribe(cart => this.cartEmitter.emit(cart));
            });
    }

    removeFromCart(cartBurger) {
        this.httpClient.delete<any[]>(API_CART_BURGERS + '/' + cartBurger.id)
            .subscribe(data => {
                this.cartService.findById(this.cartService.cart['id']).subscribe(cart => this.cartEmitter.emit(cart));
            });
    }

    removeFromCartBurger(cartBurgerIngredient) {
        this.httpClient.delete<any[]>(API_CART_BURGER_INGREDIENTS + '/' + cartBurgerIngredient.id)
            .subscribe(data => {
                this.cartService.findById(this.cartService.cart['id']).subscribe(cart => this.cartEmitter.emit(cart));
            });
    }
}
