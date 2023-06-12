import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Buttons, ButtonsRedirect } from 'src/app/models/UtilsModels';
import { CompanyService } from 'src/app/services/company.service';

@Component({
    selector: 'app-redirect-button',
    templateUrl: './redirect-button.component.html',
    styleUrls: ['./redirect-button.component.scss'],
})
export class RedirectButtonComponent implements OnInit {

    @Input() button_title: Buttons;

    constructor(
        private navController: NavController,
        public companyService: CompanyService
    ) { }

    ngOnInit() { }

    onClick(){
		this.navController.navigateForward(ButtonsRedirect[this.button_title]);
        this.companyService.currentPage = this.button_title;
        this.companyService.updateTabsMap(this.button_title);
    }
}