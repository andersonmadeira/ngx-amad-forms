import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxAmadFormsComponent } from './ngx-amad-forms.component';
import { FormControl, TextControl, NumberControl, SelectControl } from './components';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        NgxAmadFormsComponent,
        FormControl,
        TextControl,
        NumberControl,
        SelectControl,
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        NgxAmadFormsComponent,
        FormControl,
        TextControl,
        NumberControl,
        SelectControl,
    ]
})
export class NgxAmadFormsModule { }
