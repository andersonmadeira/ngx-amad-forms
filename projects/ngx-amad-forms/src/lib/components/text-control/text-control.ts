import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '../form-control';

@Component({
    selector: 'amad-text-control',
    templateUrl: './text-control.html',
    styleUrls: ['./text-control.scss']
})
export class TextControl extends FormControl<string> implements OnInit {

    @Input() password: boolean = false;

    constructor() {
        super();
    }

    ngOnInit() {

    }

}
