import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesCoursesComponent } from './tables-courses.component';

describe('TablesCoursesComponent', () => {
  let component: TablesCoursesComponent;
  let fixture: ComponentFixture<TablesCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablesCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
