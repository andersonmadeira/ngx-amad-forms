import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '../form-control';

@Component({
    selector: 'amad-select-control',
    templateUrl: './select-control.html',
    styleUrls: ['./select-control.scss']
})
export class SelectControl extends FormControl<SelectOption> implements OnInit {

    @Input() options: SelectOption[] = [];

    @Output() onSelected: EventEmitter<SelectOption> = new EventEmitter<SelectOption>();

    constructor() {
        super();
    }

    ngOnInit() {

    }

    onChange(obj) {
        this.value = obj;
        this.onSelected.emit(obj);
    }

}

export interface SelectOption {
    value: any;
    description: string;
}
