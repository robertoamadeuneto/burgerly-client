import { Injectable } from '@angular/core';
import { PanelService } from '../panel/panel.service';
import { CartService } from '../panel/cart/cart.service';

@Injectable({ providedIn: 'root' })
export class ActionsService {

    cartId: number;

    constructor(private actionsService: ActionsService,
        private panelService: PanelService,
        private cartService: CartService) {
    }

    createCart() {
        this.cartService.create();
    }
}