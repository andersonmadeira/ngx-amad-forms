import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAmadFormsComponent } from './ngx-amad-forms.component';

describe('NgxAmadFormsComponent', () => {
  let component: NgxAmadFormsComponent;
  let fixture: ComponentFixture<NgxAmadFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAmadFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAmadFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
