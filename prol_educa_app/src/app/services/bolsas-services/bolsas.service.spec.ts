import { TestBed } from '@angular/core/testing';

import { BolsasService } from './bolsas.service';

describe('BolsasService', () => {
  let service: BolsasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolsasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
