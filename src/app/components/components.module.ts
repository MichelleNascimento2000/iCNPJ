import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';
import { RedirectButtonComponent } from './redirect-button/redirect-button.component';


@NgModule({
    declarations: [
        RedirectButtonComponent
    ],
    exports: [
        RedirectButtonComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule
    ]
})
export class ComponentsModule { }