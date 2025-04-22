import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionRegistrationComponent } from './institution-registration.component';

describe('InstitutionRegistrationComponent', () => {
  let component: InstitutionRegistrationComponent;
  let fixture: ComponentFixture<InstitutionRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
