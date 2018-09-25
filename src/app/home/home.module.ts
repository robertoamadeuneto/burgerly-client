import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from "../../../node_modules/@angular/common";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ActionsComponent } from './actions/actions.component';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { PanelComponent } from './panel/panel.component';
import { PanelModule } from './panel/panel.module';
import { PanelService } from './panel/panel.service';

@NgModule({
    declarations: [
        HeaderComponent,
        ActionsComponent,
        HomeComponent,
        PanelComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        PanelModule
    ],
    exports: [
        HeaderComponent,
        ActionsComponent,
        HomeComponent,
        PanelModule
    ]
})
export class HomeModule {

}