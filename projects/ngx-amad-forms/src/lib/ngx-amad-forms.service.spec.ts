import { TestBed } from '@angular/core/testing';

import { NgxAmadFormsService } from './ngx-amad-forms.service';

describe('NgxAmadFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAmadFormsService = TestBed.get(NgxAmadFormsService);
    expect(service).toBeTruthy();
  });
});
