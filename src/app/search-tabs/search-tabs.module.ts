import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchTabsPageRoutingModule } from './search-tabs-routing.module';

import { SearchTabsPage } from './search-tabs.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchTabsPageRoutingModule
    ],
    declarations: [SearchTabsPage]
})
export class SearchTabsPageModule { }
