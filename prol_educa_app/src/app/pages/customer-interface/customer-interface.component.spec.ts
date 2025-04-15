import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInterfaceComponent } from './customer-interface.component';

describe('CustomerInterfaceComponent', () => {
  let component: CustomerInterfaceComponent;
  let fixture: ComponentFixture<CustomerInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
