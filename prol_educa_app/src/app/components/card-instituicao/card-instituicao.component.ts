// card-instituicao.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { BtnAddComponent } from '../btn-add/btn-add.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-card-instituicao',
  templateUrl: './card-instituicao.component.html',
  styleUrls: ['./card-instituicao.component.scss'],
  imports: [CommonModule, MatCardModule, BtnAddComponent, MatIconModule],
})
export class CardInstituicaoComponent {
  @Input() titulo!: string;

  @Input() isAliveBtnAdd: boolean = false;

  rotaAtual = '';

  constructor(private router: Router) {
    this.rotaAtual = this.router.url;

    this.router.events.subscribe(() => {
      this.rotaAtual = this.router.url;
    });
  }

  getIconsName() {
    if (this.rotaAtual.includes('/admin/cursos')) return 'book';
    if (this.rotaAtual.includes('/admin/bolsistas')) return 'person';
    if (this.rotaAtual.includes('/admin')) return 'admin_panel_settings';

    return 'draft';
  }
}
