import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseRegistrationTwoComponent } from './course-registration-two.component';

describe('CourseRegistrationTwoComponent', () => {
  let component: CourseRegistrationTwoComponent;
  let fixture: ComponentFixture<CourseRegistrationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseRegistrationTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseRegistrationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
