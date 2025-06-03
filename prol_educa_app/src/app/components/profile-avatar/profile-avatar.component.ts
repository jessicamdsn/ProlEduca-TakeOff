import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-avatar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile-avatar.component.html',
  styleUrl: './profile-avatar.component.scss',
})
export class ProfileAvatarComponent {
  @Input() nome: string = 'Avatar';

  get start(): string {
    return this.nome ? this.nome.charAt(0).toUpperCase() : '';
  }
}
