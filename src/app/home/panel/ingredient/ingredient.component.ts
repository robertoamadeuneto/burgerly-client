import { Component, OnInit } from '@angular/core';
import { IngredientService } from './ingredient.service';
import { Ingredient } from './ingredient';
import { CartService } from '../cart/cart.service';
import { BurgerService } from '../burger/burger.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService,
    private cartService: CartService,
    private burgerService: BurgerService) { }

  ngOnInit() {
    this.ingredientService.findAll().subscribe(data => this.ingredients = data);
  }

  addToCartBurger(ingredient: Ingredient) {
    if (this.cartService.cartBurger != null) {
      let cartBurgerIngredient = {
        cartBurger: this.cartService.cartBurger,
        ingredient: {
          id: ingredient.id
        }
      };

      this.ingredientService.addToCartBurger(cartBurgerIngredient).subscribe(() => {
        this.cartService.findById(this.cartService.cart['id']).subscribe(cart => this.burgerService.cartEmitter.emit(cart));
      });
    }
  }
}
