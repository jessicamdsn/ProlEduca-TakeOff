import { Component } from '@angular/core';
import { ProfileAvatarComponent } from '../../components/profile-avatar/profile-avatar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileAvatarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Corrigido aqui
})
export class HeaderComponent { }
