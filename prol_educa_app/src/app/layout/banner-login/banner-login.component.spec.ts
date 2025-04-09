import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLoginComponent } from './banner-login.component';

describe('BannerLoginComponent', () => {
  let component: BannerLoginComponent;
  let fixture: ComponentFixture<BannerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
