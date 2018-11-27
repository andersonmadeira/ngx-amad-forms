import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'amad-form-control',
    templateUrl: './form-control.html',
    styleUrls: ['./form-control.css']
})
export class FormControl implements OnInit {

    @Input() field_name: string;
    @Input() field_label: string;
    @Input() field_type: string;

    private _value: string = "";

    constructor() {
        this.value = "";
    }

    get value () : string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }

    ngOnInit() {

    }

}
