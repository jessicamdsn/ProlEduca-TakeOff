import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipRegistrationComponent } from './scholarship-registration.component';

describe('ScholarshipRegistrationComponent', () => {
  let component: ScholarshipRegistrationComponent;
  let fixture: ComponentFixture<ScholarshipRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholarshipRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScholarshipRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
