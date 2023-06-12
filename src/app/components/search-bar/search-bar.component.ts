import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

    @Input() page = 'Pesquisar';

    constructor(
        public companyService: CompanyService
    ) { }

    ngOnInit() { }

    public iconColorsMap: Map<String, String> = new Map([
        ['Pesquisar' , getComputedStyle(document.documentElement).getPropertyValue('--white')]
    ]);

    public isPageSearch(){
        return this.page == 'Pesquisar';
    }

    //  Método para realizar a busca dependendo da página
    public search(): void {
        switch (this.page) {
            case 'Pesquisar':
                this.companyService.searchCompany();
                break;
        }
    }

    //  Limpar Input
    public clearInput(): void {
        if (this.page == 'Pesquisar') {
            this.companyService.cnpjToGet = '';
            return;
        }
    }
}