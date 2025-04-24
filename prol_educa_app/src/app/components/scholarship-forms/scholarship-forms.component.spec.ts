import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipFormsComponent } from './scholarship-forms.component';

describe('ScholarshipFormsComponent', () => {
  let component: ScholarshipFormsComponent;
  let fixture: ComponentFixture<ScholarshipFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholarshipFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScholarshipFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
