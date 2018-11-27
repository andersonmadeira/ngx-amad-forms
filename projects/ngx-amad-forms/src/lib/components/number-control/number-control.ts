import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '../form-control';

@Component({
    selector: 'amad-number-control',
    templateUrl: './number-control.html',
    styleUrls: ['./number-control.scss']
})
export class NumberControl extends FormControl<number> implements OnInit {

    @Input() min: number = 1;
    @Input() max: number = 10;

    constructor() {
        super();
    }

    ngOnInit() {

    }

}
