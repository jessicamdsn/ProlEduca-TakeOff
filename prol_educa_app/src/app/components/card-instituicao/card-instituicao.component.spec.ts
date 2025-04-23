import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInstituicaoComponent } from './card-instituicao.component';

describe('CardInstituicaoComponent', () => {
  let component: CardInstituicaoComponent;
  let fixture: ComponentFixture<CardInstituicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInstituicaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
