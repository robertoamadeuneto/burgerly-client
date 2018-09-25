import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PanelModule } from './home/panel/panel.module';
import { IngredientModule } from './home/panel/ingredient/ingredient.module';
import { CartModule } from './home/panel/cart/cart.module';
import { BurgerModule } from './home/panel/burger/burger.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BurgerModule,
    IngredientModule,
    CartModule,
    PanelModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
