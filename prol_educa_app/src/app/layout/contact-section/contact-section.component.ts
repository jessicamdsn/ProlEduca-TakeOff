import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../shared/services/scroll/scroll.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  whatsappNumber = '(81) 9 9129-7982';
  socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/proleduca/',
      icon: 'facebook',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/proleduca/',
      icon: 'instagram',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/prol-educa/',
      icon: 'linkedin',
    },
  ];

  constructor(private scrollService: ScrollService, private el: ElementRef) {}

  ngOnInit(): void {
    this.scrollService.scrollToSection$.subscribe((sectionId) => {
      if (sectionId === 'contact') {
        this.el.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  }
}
