import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmInterfaceComponent } from './adm-interface.component';

describe('AdmInterfaceComponent', () => {
  let component: AdmInterfaceComponent;
  let fixture: ComponentFixture<AdmInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
