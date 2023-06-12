import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';
import { RedirectButtonComponent } from './redirect-button/redirect-button.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
    declarations: [
        RedirectButtonComponent,
        SearchBarComponent
    ],
    exports: [
        RedirectButtonComponent,
        SearchBarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule
    ]
})
export class ComponentsModule { }