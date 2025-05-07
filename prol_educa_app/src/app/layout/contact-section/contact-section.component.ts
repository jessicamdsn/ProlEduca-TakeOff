import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  whatsappNumber = '(81) 9 9129-7982';
  socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/proleduca/', icon: 'facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/proleduca/', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/prol-educa/', icon: 'linkedin' }
  ];
}
