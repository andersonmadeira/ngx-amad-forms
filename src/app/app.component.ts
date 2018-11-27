import { Component, ViewChild, OnInit } from '@angular/core';
import { TextControl, NumberControl, SelectControl, SelectOption } from 'ngx-amad-forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    @ViewChild('myText') textControl: TextControl;
    @ViewChild('myNumber') numControl: NumberControl;
    @ViewChild('myPass') passControl: TextControl;
    @ViewChild('myOptions') selectControl: SelectControl;

    ngOnInit() {
        this.textControl.value ="Text here";
        this.numControl.value = 3;
        this.passControl.value = "my password goes here";

        let option1 = { value: 1, description: "Option 1" };

        this.selectControl.options = [
            option1,
            { value: 2, description: "Option 2" },
            { value: 3, description: "Option 3" },
        ]

        this.selectControl.value = option1;
    }

    onSelected(option: SelectOption) {
        console.log("Selected in parent: ", option);
    }
}
