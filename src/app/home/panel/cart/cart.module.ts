import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart.component';

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [CartComponent]
})
export class CartModule { }