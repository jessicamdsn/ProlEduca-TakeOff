// src/app/pages/home-page/home-page.component.ts

import { Component } from '@angular/core';
import { CarouselBannerComponent } from '../../components/carousel-banner/carousel-banner.component';
import { CursoFilterComponent } from '../../components/curso-filter/curso-filter.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselBannerComponent, CursoFilterComponent, ContactSectionComponent, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    
    <div class="container">
      <app-carousel-banner [images]="carouselImages"></app-carousel-banner>
      <app-curso-filter (abaSelecionadaChange)="trocarImagens($event)"></app-curso-filter>
    </div>

    <app-contact-section></app-contact-section>
    <app-footer></app-footer>
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
  carouselImages: string[] = [];

  private imagensPorAba: { [key: string]: string[] } = {
    escola: ['assets/banner1.png'],
    tecnico: ['assets/banner2.webp'],
    graduacao: ['assets/banner4.webp'],
    idioma: ['assets/banner3.webp']
  };

  ngOnInit() {
    this.carouselImages = this.imagensPorAba['escola']; // default
  }

  trocarImagens(aba: string) {
    this.carouselImages = this.imagensPorAba[aba] || [];
  }
}
