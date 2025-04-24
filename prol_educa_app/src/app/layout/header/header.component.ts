import { Component, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProfileAvatarComponent } from '../../components/profile-avatar/profile-avatar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileAvatarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false
  screenWidth = 0; // Inicializa com 0 em vez de window.innerWidth

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Verifica se estamos no navegador antes de acessar window
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth
    }
  }

  // Detecta mudanças no tamanho da tela
  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    // Verifica se estamos no navegador antes de acessar window
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth

      // Fecha o menu automaticamente se a tela for redimensionada para desktop
      if (this.screenWidth > 768) {
        this.isMenuOpen = false
      }
    }
  }

  // Alterna o estado do menu mobile
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
