import { Injectable, EventEmitter } from '@angular/core';
import { CartService } from '../panel/cart/cart.service';

@Injectable({ providedIn: 'root' })
export class ActionsService {

    priceEmitter = new EventEmitter;
    cartId: number;

    constructor(
        private cartService: CartService) {
    }

    createCart() {
        this.cartService.create();
    }

    cancelCart() {
        this.priceEmitter.emit(0);
    }
}