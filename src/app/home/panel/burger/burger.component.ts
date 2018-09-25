import { Component, OnInit, ViewChild } from '@angular/core';
import { BurgerService } from './burger.service';
import { Burger } from './burger';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  burgers: Burger[];

  constructor(private burgerService: BurgerService,
    private cartService: CartService) { }

  ngOnInit() {
    this.burgerService.findAll().subscribe(data => this.burgers = data);
  }

  addToCart(burger: Burger) {
    this.burgerService.addToCart(burger).subscribe(data => {
      //this.cartService.setPrice(data['cart'].price); servindo pra nada
    });
  }
}
