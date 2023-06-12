import { Component } from '@angular/core';
import { Buttons } from '../models/UtilsModels';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor() {}

    public buttonPesquisar: Buttons = Buttons.Pesquisar;
}
