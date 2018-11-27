import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl } from 'ngx-amad-forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ngx-amad-forms-app';

    @ViewChild('myText') textControl: FormControl;
    @ViewChild('myNumber') numControl: FormControl;
    @ViewChild('myPass') passControl: FormControl;

    ngOnInit() {
        this.textControl.value ="Text here";
        this.numControl.value = "123";
        this.passControl.value = "my password goes here";
    }
}
