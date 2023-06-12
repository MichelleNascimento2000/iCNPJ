import { Component, Input, OnInit } from '@angular/core';
import { Buttons } from 'src/app/models/UtilsModels';

@Component({
    selector: 'app-redirect-button',
    templateUrl: './redirect-button.component.html',
    styleUrls: ['./redirect-button.component.scss'],
})
export class RedirectButtonComponent implements OnInit {

    @Input() button_title: Buttons;

    constructor() { }

    ngOnInit() { }
}