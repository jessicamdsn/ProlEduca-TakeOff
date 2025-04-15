import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoFilterComponent } from './curso-filter.component';

describe('CursoFilterComponent', () => {
  let component: CursoFilterComponent;
  let fixture: ComponentFixture<CursoFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
