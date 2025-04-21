import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Import necessário
import { BolsasService } from './bolsas.service';

describe('BolsasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ Adiciona aqui
      providers: [BolsasService]
    });
  });

  it('should be created', () => {
    const service: BolsasService = TestBed.inject(BolsasService);
    expect(service).toBeTruthy();
  });
});
