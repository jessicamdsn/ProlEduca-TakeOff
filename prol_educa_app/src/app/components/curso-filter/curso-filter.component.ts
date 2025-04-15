import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curso-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './curso-filter.component.html',
  styleUrls: ['./curso-filter.component.scss']
})
export class CursoFilterComponent {
  abaSelecionada = 'graduacao';

  selecionarAba(aba: string) {
    this.abaSelecionada = aba;
  }

  estados = ['PE', 'SP', 'RJ'];
  cidades = ['Recife', 'São Paulo', 'Rio de Janeiro'];
  bairros = ['Boa Viagem', 'Centro', 'Copacabana'];
  cursos = ['Engenharia', 'Administração', 'Design'];
  instituicoes = ['UFPE', 'USP', 'UFRJ'];

  modalidadePresencial = true;
  modalidadeEad = false;
}
