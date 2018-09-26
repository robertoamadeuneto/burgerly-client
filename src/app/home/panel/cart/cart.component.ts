import { Component, OnInit } from '@angular/core';

import { BurgerService } from '../burger/burger.service';
import { CartService } from './cart.service';
import { Cart } from './cart';
import { CartBurgerIngredientService } from '../cart-burger-ingredient/cart-burger-ingredient.service';
import { CartBurgerIngredient } from '../cart-burger-ingredient/cart-burger-ingredient';
import { CartBurger } from '../cart-burger/cart-burger';
import { CartBurgerService } from '../cart-burger/cart-burger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;

  constructor(private burgerService: BurgerService,
    private cartService: CartService,
    private cartBurgerService: CartBurgerService,
    private cartBurgerIngredientService: CartBurgerIngredientService) {
    this.cart = new Cart();
  }

  ngOnInit() {
    this.cartService.cartEmitter.subscribe(cart => this.cart = cart);
  }

  removeCartBurgerFromCart(cartBurger: CartBurger) {
    this.cartBurgerService.delete(cartBurger).subscribe(() => {
      this.cartService.findById(this.cartService.cart['id']).subscribe(cart => this.cartService.cartEmitter.emit(cart));
    });
  }

  selectCartBurger(cartBurger: CartBurger) {
    this.cartService.cartBurger = cartBurger;
  }

  removeCartBurgerIngredientFromCartBurger(cartBurgerIngredient: CartBurgerIngredient) {
    this.cartBurgerIngredientService.delete(cartBurgerIngredient)
      .subscribe(() => {
        this.cartService.findById(this.cartService.cart['id']).subscribe(cart => this.cartService.cartEmitter.emit(cart));
      });;
  }
}
