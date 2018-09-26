import { Component, OnInit } from '@angular/core';

import { BurgerService } from './burger.service';
import { Burger } from './burger';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  burgers: Burger[];

  constructor(private burgerService: BurgerService) { }

  ngOnInit() {
    this.burgerService.findAll().subscribe(data => {
      this.burgers = data
    });
  }

  addToCart(burger: Burger) {
    this.burgerService.addToCart(burger);
  }
}
