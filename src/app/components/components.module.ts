import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';
import { RedirectButtonComponent } from './redirect-button/redirect-button.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { ErrorItemComponent } from './error-item/error-item.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
    declarations: [
        RedirectButtonComponent,
        SearchBarComponent,
        CompanyItemComponent,
        ErrorItemComponent,
        LoaderComponent
    ],
    exports: [
        RedirectButtonComponent,
        SearchBarComponent,
        CompanyItemComponent,
        ErrorItemComponent,
        LoaderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule
    ]
})
export class ComponentsModule { }