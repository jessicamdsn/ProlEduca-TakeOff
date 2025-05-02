import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUsersAdminComponent } from './table-users-admin.component';

describe('TableUsersAdminComponent', () => {
  let component: TableUsersAdminComponent;
  let fixture: ComponentFixture<TableUsersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableUsersAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableUsersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
