import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { IngredientComponent } from './ingredient.component';

@NgModule({
    declarations: [
        IngredientComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [IngredientComponent]
})
export class IngredientModule { }