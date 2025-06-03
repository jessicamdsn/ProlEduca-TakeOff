import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './curso-filter.component.html',
  styleUrls: ['./curso-filter.component.scss']
})
export class CursoFilterComponent {
  abaSelecionada = 'escola';

constructor(private router: Router) {}
  irParaCadastro() {
  this.router.navigate(['/cliente']);
}

  @Output() abaSelecionadaChange = new EventEmitter<string>();

  selecionarAba(aba: string) {
    this.abaSelecionada = aba;
    this.abaSelecionadaChange.emit(aba);
  }

  estados = ['PE', 'SP', 'RJ'];
  cidades = ['Recife', 'São Paulo', 'Rio de Janeiro'];
  bairros = ['Boa Viagem', 'Centro', 'Copacabana'];
  cursos = ['Engenharia', 'Administração', 'Design'];
  instituicoes = ['UFPE', 'USP', 'UFRJ'];

  modalidadePresencial = false;
  modalidadeEad = false;
}
