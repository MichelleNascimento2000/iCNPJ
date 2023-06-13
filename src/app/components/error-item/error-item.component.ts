import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
    selector: 'app-error-item',
    templateUrl: './error-item.component.html',
    styleUrls: ['./error-item.component.scss'],
})
export class ErrorItemComponent implements OnInit {

    @Input() message: string;
    @Input() type: string;

    constructor(
        public companyService: CompanyService
    ) {}

    ngOnInit() {}

    public resetValidCNPJ(){
        this.companyService.isCNPJValid = true;
    }
}