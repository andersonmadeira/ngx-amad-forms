import { NgModule } from '@angular/core';
import { NgxAmadFormsComponent } from './ngx-amad-forms.component';
import { FormControl } from './components';

@NgModule({
    declarations: [
        NgxAmadFormsComponent,
        FormControl,
    ],
    imports: [
        // pass
    ],
    exports: [
        NgxAmadFormsComponent,
        FormControl,
    ]
})
export class NgxAmadFormsModule { }
