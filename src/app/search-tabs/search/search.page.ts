import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    constructor(
        public companyService: CompanyService
    ) { }

    ngOnInit() {
    }

}