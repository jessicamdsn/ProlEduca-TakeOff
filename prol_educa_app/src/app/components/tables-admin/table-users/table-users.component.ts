import { NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  UsersService,
  User,
} from '../../../services/admin-services/users/users.service';

import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-table-users',
  standalone: true,
  imports: [NgClass, NgIf, NgFor, FormsModule, HttpClientModule],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.scss',
})
export class TableUsersComponent implements OnInit {
  user: User[] = [];
  usuariosFiltrados: any[] = [];
  usuariosPaginados: any[] = [];
  usuarioSelecionado: any = null;

  termoPesquisa: string = '';
  ordenacaoAsc = true;

  paginaAtual = 1;
  itensPorPagina = 5;
  totalPaginas = 0;
  paginas: number[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.user = users;
      this.usuariosFiltrados = users;
      this.usuariosPaginados = users.slice(0, this.itensPorPagina);
      this.totalPaginas = Math.ceil(users.length / this.itensPorPagina);
    });
  }

  filtrarUsuarios() {
    this.usuariosFiltrados = this.usuariosFiltrados.filter((users) => {
      return users.nome
        .toLowerCase()
        .includes(this.termoPesquisa.toLowerCase());
    });
    this.paginaAtual = 1;
    this.atualizarPaginacao();
  }

  ordenarPorNome() {
    this.ordenacaoAsc = !this.ordenacaoAsc;
    this.usuariosFiltrados.sort((a, b) => {
      const nomeA = a.nome.toLowerCase();
      const nomeB = b.nome.toLowerCase();
      if (nomeA < nomeB) return this.ordenacaoAsc ? -1 : 1;
      if (nomeA > nomeB) return this.ordenacaoAsc ? 1 : -1;
      return 0;
    });
    this.atualizarPaginacao();
  }

  atualizarPaginacao() {
    this.totalPaginas = Math.ceil(
      this.usuariosFiltrados.length / this.itensPorPagina
    );
    this.paginas = Array(this.totalPaginas)
      .fill(0)
      .map((_, i) => i + 1);

    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.usuariosPaginados = this.usuariosFiltrados.slice(inicio, fim);
  }

  mudarPagina(pagina: number) {
    if (pagina < 1 || pagina > this.totalPaginas) return;
    this.paginaAtual = pagina;
    this.atualizarPaginacao();
  }

  // Modal de edição
  modalAberto = false;

  abrirModal(usuario: User) {
    this.usuarioSelecionado = { ...usuario };
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }


  salvarEdicao(form: NgForm) {
    if (form.invalid) return;

    this.userService.updateUser(this.usuarioSelecionado).subscribe({
      next: (usuarioAtualizado) => {
        const index = this.usuariosFiltrados.findIndex(
          (u: User) => u.trackingId === (usuarioAtualizado as User).trackingId
        );
        if (index !== -1) {
          this.usuariosFiltrados[index] = usuarioAtualizado;
        }

        this.fecharModal();

        this.atualizarPaginacao();

      },
      error: (erro) => {
        console.error('Erro ao salvar:', erro);
        alert('Erro ao salvar os dados. Tente novamente.');
      },
    });
  }
}
