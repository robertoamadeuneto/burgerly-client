import { Component, OnInit } from '@angular/core';

import { ActionsService } from './actions.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  active = false;

  constructor(private actionsService: ActionsService) { }

  ngOnInit() {
  }

  createCart() {
    this.active = true;
    this.actionsService.createCart();
  }

  cancelCart() {
    this.active = false;
    this.actionsService.cancelCart();
  }

  finishCart() {
    this.active = false;
    this.actionsService.finishCart();
  }
}
