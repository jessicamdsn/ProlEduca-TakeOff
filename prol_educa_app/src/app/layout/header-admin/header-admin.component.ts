import { Component } from '@angular/core';
import { ProfileAvatarComponent } from '../../components/profile-avatar/profile-avatar.component';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [ProfileAvatarComponent],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.scss'
})
export class HeaderAdminComponent {
  logout() {
    // Lógica para sair do login
    localStorage.clear(); // ou remove o token
    // this.router.navigate(['/login']); // redireciona para a página de login
  }
  
}
