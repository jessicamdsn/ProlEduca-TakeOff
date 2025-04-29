import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminUsersComponent } from './view-admin-users.component';

describe('ViewAdminUsersComponent', () => {
  let component: ViewAdminUsersComponent;
  let fixture: ComponentFixture<ViewAdminUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAdminUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
