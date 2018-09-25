import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel/panel.service';
import { ActionsService } from './actions.service';
import { CartService } from '../panel/cart/cart.service';
import { BurgerService } from '../panel/burger/burger.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  
  active = false;

  constructor(private actionsService: ActionsService,
    private panelService: PanelService,
    private cartService: CartService,
    private burgerService: BurgerService) { }

  ngOnInit() {
  }

  enableDisablePanel() {
    this.active = !this.active;
    this.panelService.enableDisablePanel();

    if (this.active) {
      this.actionsService.createCart();
    } else {
      this.actionsService.cancelCart();
    }
  }

  cancelCart() {
    this.active = false;
    this.cartService.delete(this.cartService.cart['id']).subscribe();
    this.burgerService.cartEmitter.emit({id: null, price: null, cartBurgers: null});
  }
}
