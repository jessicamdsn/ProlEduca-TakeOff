// src/app/pages/home-page/home-page.component.ts

import { Component } from '@angular/core';
import { CarouselBannerComponent } from '../../components/carousel-banner/carousel-banner.component';
import { CursoFilterComponent } from '../../components/curso-filter/curso-filter.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselBannerComponent, CursoFilterComponent, ContactSectionComponent],
  template: `
    <div class="container">
      <app-carousel-banner [images]="carouselImages"></app-carousel-banner>
      <app-curso-filter></app-curso-filter>
    </div>

    <app-contact-section></app-contact-section>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class HomePageComponent {
  carouselImages = [
    'assets/banner1.png',
    'assets/banner2.webp',
    'assets/banner4.webp',
    'assets/banner3.webp'
  ];
}
