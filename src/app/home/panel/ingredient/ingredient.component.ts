import { Component, OnInit } from '@angular/core';
import { IngredientService } from './ingredient.service';
import { Ingredient } from './ingredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientService.findAll().subscribe(data => this.ingredients = data);
  }
}
