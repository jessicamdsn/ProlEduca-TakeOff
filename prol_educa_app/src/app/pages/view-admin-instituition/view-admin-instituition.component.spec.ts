import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminInstituitionComponent } from './view-admin-instituition.component';

describe('ViewAdminInstituitionComponent', () => {
  let component: ViewAdminInstituitionComponent;
  let fixture: ComponentFixture<ViewAdminInstituitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAdminInstituitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAdminInstituitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
