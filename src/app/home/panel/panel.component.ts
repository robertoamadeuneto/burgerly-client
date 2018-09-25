import { Component, OnInit, ViewChild } from '@angular/core';
import { BurgerComponent } from './burger/burger.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @ViewChild('appBurger') appBurger: BurgerComponent;

  constructor() { }

  ngOnInit() {
  }

  
}
