import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/models/CompanyModels';
import { CompanyService } from 'src/app/services/company.service';

@Component({
    selector: 'app-company-item',
    templateUrl: './company-item.component.html',
    styleUrls: ['./company-item.component.scss'],
})
export class CompanyItemComponent implements OnInit {

    @Input() page: string;
    @Input() company: Company;
    
    constructor(
        public companyService: CompanyService
    ) { }

    ngOnInit() { }

    public getCompany(): Company {
        return this.companyService.searchedCompany;
    }

    public getObjectKeys(obj: any): string[] {
        return Object.keys(obj);
    }

    public shouldInfoAppear(key: string, value: string): boolean{
        return  Boolean(value) && 
                !['status', 'cnpj', 'razao', 'atividade_principal', 'atividades_secundarias', 'qsa'].includes(key);
    }
}
