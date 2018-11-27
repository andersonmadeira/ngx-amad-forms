import { Input, Component } from '@angular/core';

@Component({
    template: '<p>Hello here</p>',
    styles: ['']
})
export class FormControl<DataType> {

    @Input() field_name: string;
    @Input() field_label: string;

    private _value: DataType;

    constructor() { }

    get value () : DataType {
        return this._value;
    }

    set value (value: DataType) {
        this._value = value;
    }

}
