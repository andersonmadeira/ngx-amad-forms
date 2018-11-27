import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxAmadFormsModule } from 'ngx-amad-forms';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxAmadFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
