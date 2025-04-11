import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-avatar',
  standalone: true,
  imports: [],
  templateUrl: './profile-avatar.component.html',
  styleUrl: './profile-avatar.component.scss',
})
export class ProfileAvatarComponent {
  @Input() nome: string = 'Avatar';

  get start(): string {
    return this.nome ? this.nome.charAt(0).toUpperCase() : '';
  }
}
