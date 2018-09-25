import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { BurgerService } from '../burger/burger.service';
import { CartService } from './cart.service';
import { Cart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;

  constructor(private burgerService: BurgerService,
    private cartService: CartService) {
    this.cart = new Cart();
  }

  ngOnInit() {
    this.burgerService.cartEmitter.subscribe(cart => {
      this.cart = cart;
      this.selectCartBurger(this.cartService.cartBurger, this.cartService.selectedLi);
    });
  }

  removeFromCart(cartBurger: any) {
    this.burgerService.removeFromCart(cartBurger);
  }

  selectCartBurger(cartBurger: any, i: number) {
    // if (cartBurger != undefined && i != undefined) {
    //   this.cartService.cartBurger = cartBurger;

    //   var lis = document.getElementsByClassName('cart-burger');
    //   for (let j = 0; j < lis.length; j++) {
    //     lis[j].setAttribute('style', 'background-color: white');
    //   }

    //   lis[i].setAttribute('style', 'background-color: #c7defc');

    //   this.cartService.selectedLi = i;
    // }

    this.cartService.cartBurger = cartBurger;
  }

  removeFromCartBurger(cartBurgerIngredient: any) {
    this.burgerService.removeFromCartBurger(cartBurgerIngredient);
  }
}
