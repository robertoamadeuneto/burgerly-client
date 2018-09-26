import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { BurgerModule } from './burger/burger.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { CartModule } from './cart/cart.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        BurgerModule,
        IngredientModule,
        CartModule
    ],
    exports: [
        BurgerModule,
        IngredientModule,
        CartModule
    ]
})
export class PanelModule {

}