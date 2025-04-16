import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsasListComponent } from './bolsas-list.component';

describe('BolsasListComponent', () => {
  let component: BolsasListComponent;
  let fixture: ComponentFixture<BolsasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolsasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
