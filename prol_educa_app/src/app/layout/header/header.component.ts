import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  HostListener,
  Input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProfileAvatarComponent } from '../../components/profile-avatar/profile-avatar.component';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../shared/services/scroll/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileAvatarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  screenWidth = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private scrollService: ScrollService
  ) {}

  @Input() esconderNavbar = false;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;

      if (this.screenWidth > 768) {
        this.isMenuOpen = false;
      }
    }
  }

  goToContact(): void {
    this.scrollService.scrollTo('contact');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
