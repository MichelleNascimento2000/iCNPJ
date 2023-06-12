import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
    selector: 'app-search-tabs',
    templateUrl: './search-tabs.page.html',
    styleUrls: ['./search-tabs.page.scss'],
})
export class SearchTabsPage implements OnInit {

    constructor(
        public companyService: CompanyService
    ) { }

    ngOnInit() {
    }

}