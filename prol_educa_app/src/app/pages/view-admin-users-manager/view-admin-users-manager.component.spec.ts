import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminUsersManagerComponent } from './view-admin-users-manager.component';

describe('ViewAdminUsersManagerComponent', () => {
  let component: ViewAdminUsersManagerComponent;
  let fixture: ComponentFixture<ViewAdminUsersManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAdminUsersManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAdminUsersManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
