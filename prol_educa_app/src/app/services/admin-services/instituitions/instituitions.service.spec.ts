import { TestBed } from '@angular/core/testing';

import { InstituitionsService } from './instituitions.service';

describe('InstituitionsService', () => {
  let service: InstituitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
