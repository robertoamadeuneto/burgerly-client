import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() price: number;

  constructor() {
    this.price = 0;
  }

  ngOnInit() {

  }

  setPrice(price: number) {
    this.price = price;
  }

}
