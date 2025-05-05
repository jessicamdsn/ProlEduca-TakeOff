import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInstitutionsComponent } from './table-institutions.component';

describe('TableInstitutionsComponent', () => {
  let component: TableInstitutionsComponent;
  let fixture: ComponentFixture<TableInstitutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableInstitutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
