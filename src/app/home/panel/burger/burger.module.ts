import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BurgerComponent } from './burger.component';
import { Burger } from './burger';

@NgModule({
    declarations: [
        BurgerComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [BurgerComponent]
})
export class BurgerModule { 
}