import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import { Burger } from "./burger";
import { CartService } from '../cart/cart.service';
import { CartBurger } from '../cart-burger/cart-burger';
import { CartBurgerService } from '../cart-burger/cart-burger.service';

const API_BURGERS = 'http://localhost:8080/api/burgers/';

@Injectable({ providedIn: 'root' })
export class BurgerService {

    constructor(private httpClient: HttpClient,
        private cartService: CartService,
        private cartBurgerService: CartBurgerService) { }

    findAll(): Observable<Burger[]> {
        return this.httpClient.get<Burger[]>(API_BURGERS);
    }

    addToCart(burger: Burger) {

        let cartBurger = new CartBurger();
        cartBurger.cart = this.cartService.cart;
        cartBurger.burger = burger;

        this.cartBurgerService.create(cartBurger).subscribe(() => {
            this.cartService.findById(this.cartService.cart['id']).subscribe(cart => this.cartService.cartEmitter.emit(cart));
        });
    }
}
