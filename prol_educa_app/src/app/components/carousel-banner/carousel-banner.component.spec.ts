import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBannerComponent } from './carousel-banner.component';

describe('CarouselBannerComponent', () => {
  let component: CarouselBannerComponent;
  let fixture: ComponentFixture<CarouselBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
