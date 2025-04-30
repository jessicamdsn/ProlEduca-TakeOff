// card-instituicao.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BtnAddComponent } from '../btn-add/btn-add.component';

@Component({
  standalone: true,
  selector: 'app-card-instituicao',
  templateUrl: './card-instituicao.component.html',
  styleUrls: ['./card-instituicao.component.scss'],
  imports: [CommonModule, MatCardModule, BtnAddComponent],
})
export class CardInstituicaoComponent {
  @Input() titulo!: string;

  @Input() isAliveBtnAdd: boolean = false;


}
