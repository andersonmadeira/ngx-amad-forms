# ngx-amad-forms

Form Controls for Angular, inspired by Reactive Forms, but meant to be stronger and easier to use! [:

## About

This library is meant to provide an easy and powerful way of creating forms in Angular. Power you apps with powerful (yet simple) form fields in Angular with top speed.

## Installation

Install it with npm:

`npm install ngx-amad-forms --save`

## How to use

Import the main library module in your app module:

```ts
import { NgxAmadFormsModule } from 'ngx-amad-forms';

// ...

@NgModule({
    // ...
    imports: [
        // ...
        NgxAmadFormsModule
    ],
    // ...
})
export class AppModule {
    // ...
}
```

Then you can use the controls in your template files:

```html
<amad-text-control #myText [field_name]="'my_text'" [field_label]="'Type some text:'"></amad-text-control>
<amad-number-control #myNumber [field_name]="'my_number'" [field_label]="'Enter a number:'"></amad-number-control>
<amad-text-control #myPass [password]="true" [field_name]="'my_password'" [field_label]="'Enter your password:'"></amad-text-control>
<amad-select-control #myOptions [field_name]="'my_select'" (onSelected)="onSelected($event)" [field_label]="'Please choose one of the options:'"></amad-select-control>
```

And in your component:

```ts
import { Component, ViewChild, OnInit } from '@angular/core';
import { TextControl, NumberControl, SelectControl, SelectOption } from 'ngx-amad-forms';

@Component({
    // ...
})
export class AppComponent implements OnInit {

    // Get child components
    @ViewChild('myText') textControl: TextControl;
    @ViewChild('myNumber') numControl: NumberControl;
    @ViewChild('myPass') passControl: TextControl;
    @ViewChild('myOptions') selectControl: SelectControl;

    ngOnInit() {
        // Set field's value
        this.textControl.value ='Text here';
        this.numControl.value = 3;
        this.passControl.value = 'my password goes here';

        let option1 = { value: 1, description: 'Option 1' };

        // Set options
        this.selectControl.options = [
            option1,
            { value: 2, description: 'Option 2' },
            { value: 3, description: 'Option 3' },
        ]

        // Set selected option
        this.selectControl.value = option1;
    }

    // listen for selections
    onSelected(option: SelectOption) {
        console.log('Selected option: ', option);
    }
}
```

## Roadmap

- Version zero (0)

- [x] TextControl
- [x] SelectControl
- [x] NumberControl
- [ ] RadioControl
- [ ] DateControl
- [ ] CheckboxControl
- [ ] TextareaControl
- [ ] FileControl
- [ ] HiddenControl
- [ ] Form
- [ ] FormBuilder
- [ ] Make form validators (required, email, etc)
- [ ] Option for multile selection in SelectControl
- [ ] Simple visual (optional)

## Contributions

Feel free to contribute or chat with me! (:

For more information on how to contribute and this whole thing of repositories, please check [this](https://guides.github.com/introduction/flow/) awesome guide.
