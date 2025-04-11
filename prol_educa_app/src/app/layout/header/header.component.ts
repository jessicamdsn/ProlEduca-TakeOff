import { Component } from '@angular/core';
import { ProfileAvatarComponent } from '../../components/profile-avatar/profile-avatar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileAvatarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
