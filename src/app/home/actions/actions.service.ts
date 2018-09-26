import { Injectable, EventEmitter } from '@angular/core';

import { CartService } from '../panel/cart/cart.service';
import { Cart } from '../panel/cart/cart';

@Injectable({ providedIn: 'root' })
export class ActionsService {

    constructor(private cartService: CartService) {
    }

    createCart() {
        this.cartService.create();
    }

    cancelCart() {
        this.cartService.delete(this.cartService.cart['id']).subscribe(() => this.cartService.cartEmitter.emit(new Cart()));
    }

    finishCart() {
        this.cartService.finish(this.cartService.cart).subscribe(() => this.cartService.cartEmitter.emit(new Cart()));
    }
}