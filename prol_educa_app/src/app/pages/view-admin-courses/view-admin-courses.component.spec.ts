import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminCoursesComponent } from './view-admin-courses.component';

describe('ViewAdminCoursesComponent', () => {
  let component: ViewAdminCoursesComponent;
  let fixture: ComponentFixture<ViewAdminCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAdminCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAdminCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
