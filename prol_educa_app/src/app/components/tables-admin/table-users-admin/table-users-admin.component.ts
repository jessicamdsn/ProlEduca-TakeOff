import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

import { User } from '../../../services/admin-services/users/users.service';
import { UsersAdminService } from '../../../services/admin-services/users-admin/users-admin.service';
import { EditUserDialogComponent } from '../../../shared/edit-user-dialog/edit-user-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-users-admin',
  standalone: true,
  imports: [NgFor, NgIf,NgClass,FormsModule],
  templateUrl: './table-users-admin.component.html',
  styleUrl: './table-users-admin.component.scss'
})
export class TableUsersAdminComponent {
  user: User[] = [];
  usuariosFiltrados: any[] = [];
  usuariosPaginados: any[] = [];
  usuarioSelecionado: any = null;

  termoPesquisa: string = '';
  ordenacaoAsc = true;

  paginaAtual = 1;
  itensPorPagina = 5;
  totalPaginas: number = 0;
  paginas: number[] = [];

  constructor(
    private dialog: MatDialog,
    private dialogEditModal: MatDialog,
    private userAdminService: UsersAdminService,
  ) {}

  ngOnInit() {
    this.userAdminService.getUsers().subscribe((users) => {
      this.user = users;
      this.usuariosFiltrados = users;
      this.totalPaginas = Math.ceil(users.length / this.itensPorPagina);
      this.atualizarPaginacao();
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
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.usuariosPaginados = this.usuariosFiltrados.slice(inicio, fim);

    this.totalPaginas = Math.ceil(this.usuariosFiltrados.length / this.itensPorPagina);
    this.paginas = Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }

  mudarPagina(pagina: number) {
    if (pagina < 1 || pagina > this.totalPaginas) return;
    this.paginaAtual = pagina;
    this.atualizarPaginacao();
  }


  // btn Update
  openDialogUpdate(user: User) {
    const dialogRef = this.dialogEditModal.open(EditUserDialogComponent, {
      width: '500px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((usuarioAtualizado: User | undefined) => {
      if (usuarioAtualizado) {
        this.userAdminService.updateUser(usuarioAtualizado).subscribe({
          next: (updatedUser) => {
            const index = this.usuariosFiltrados.findIndex(
              (u: User) => u.trackingId === (updatedUser as User).trackingId
            );
            if (index !== -1) {
              this.usuariosFiltrados[index] = updatedUser;
            }
            this.atualizarPaginacao();
          },
          error: (erro) => {
            console.error('Erro ao salvar:', erro);
            alert('Erro ao salvar os dados. Tente novamente.');
          }
        });
      }
    });
  }

  // btn Deletar

  openDialogDelete(user: User) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        mensagem:
          'Você tem certeza que deseja excluir o usuário ' + user.nome + '?',
      },
    });

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this.deleteUser(user);
      }
    });
  }

  deleteUser(user: User) {
    this.userAdminService.deleteUser(user.trackingId).subscribe({
      next: () => {
        this.usuariosFiltrados = this.usuariosFiltrados.filter(
          (u: User) => u.trackingId !== user.trackingId
        );
        this.atualizarPaginacao();
      },
      error: (error) => {
        console.error('Erro ao deletar o usuário', error);
        alert('Erro ao deletar o usuário. Tente novamente.');
      },
    });
  }
}
