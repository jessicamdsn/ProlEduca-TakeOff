import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-banner.component.html',
  styleUrls: ['./carousel-banner.component.scss']
})
export class CarouselBannerComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() categories: string[] = [];
  
  currentIndex = 0;
  activeCategory = 1; // Default to second category (Cursos Técnicos)

  constructor() {}

  ngOnInit(): void {
    // Default images if none provided
    if (this.images.length === 0) {
      this.images = [
        'assets/banner1.png',
        'assets/banner2.webp',
        'assets/banner4.webp',
        'assets/banner3.webp',
      ];
    }

    // Default categories if none provided
    if (this.categories.length === 0) {
      this.categories = [
        'Ensino Básico',
        'Cursos Técnicos',
        'Graduação',
        'Idiomas'
      ];
    }
  }

  prevSlide(): void {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextSlide(): void {
    this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  setCategory(index: number): void {
    this.activeCategory = index;
    // In a real application, you might want to load different images based on the category
  }
}