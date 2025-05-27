import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from '../../../services/admin-services/users/users.service';
import { UsersAdminService } from '../../../services/admin-services/users-admin/users-admin.service';
import { EditUserDialogComponent } from '../../../shared/edit-user-dialog/edit-user-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { AdmService } from '../../../services/adm.service';

@Component({
  selector: 'app-table-users-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table-users-admin.component.html',
  styleUrl: './table-users-admin.component.scss',
})
export class TableUsersAdminComponent {
  user: User[] = [];
  usuariosFiltrados: User[] = [];
  usuariosPaginados: User[] = [];
  usuarioSelecionado: User | null = null;

  termoPesquisa: string = '';
  ordenacaoAsc = true;

  paginaAtual = 1;
  itensPorPagina = 5;
  totalPaginas: number = 0;
  paginas: number[] = [];

  constructor(
    private dialog: MatDialog,
    private alertService: AlertService,
    private dialogEditModal: MatDialog,
    private userAdminService: UsersAdminService,
    private adminService: AdmService,
  ) {}

  ngOnInit() {
    // this.userAdminService.getUsers().subscribe((users) => {
    //   this.user = users;
    //   this.usuariosFiltrados = users;
    //   this.totalPaginas = Math.ceil(users.length / this.itensPorPagina);
    //   this.atualizarPaginacao();
    // });
    this.adminService.getAdmins().subscribe((response) => {
      console.log(response); 
      const admins = response.data.map((admin:any) => ({
        trackingId: admin.id,
        cpf: '---',
        nome: admin.name,
        email: admin.email,
        contato: '---', 
      }));
  
      this.user = admins;
      this.usuariosFiltrados = admins;
      this.totalPaginas = Math.ceil(admins.length / this.itensPorPagina);
      this.atualizarPaginacao();
    });
  }

  filtrarUsuarios() {
    this.usuariosFiltrados = this.user.filter((users) => {
      return this.termoPesquisa
        ? users.nome.toLowerCase().includes(this.termoPesquisa.toLowerCase())
        : true;
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

  limparPesquisa(): void {
    this.termoPesquisa = '';
    this.usuariosFiltrados = [...this.user];
    this.paginaAtual = 1;
    this.atualizarPaginacao();
  }
  atualizarPaginacao() {
    this.totalPaginas = Math.ceil(
      this.usuariosFiltrados.length / this.itensPorPagina
    );
    this.paginas = Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
    this.usuariosPaginados = this.usuariosFiltrados.slice(
      (this.paginaAtual - 1) * this.itensPorPagina,
      this.paginaAtual * this.itensPorPagina
    );
  }

  mudarPagina(pagina: number) {
    this.paginaAtual = pagina;
    this.atualizarPaginacao();
  }

  // btn Update
  openDialogUpdate(user: User) {
    const dialogRef = this.dialogEditModal.open(EditUserDialogComponent, {
      width: '500px',
      data: {
        tipo: 'usuario',
        dados: user,
      },
    });

    dialogRef.afterClosed().subscribe((usuarioAtualizado: User | undefined) => {
      if (usuarioAtualizado) {
        this.userAdminService.updateUser(usuarioAtualizado).subscribe({
          next: (updatedUser) => {
            const index = this.usuariosFiltrados.findIndex(
              (u: User) => u.trackingId === (updatedUser as User).trackingId
            );
            if (index !== -1) {
              this.usuariosFiltrados[index] = updatedUser as User;
            }
            this.atualizarPaginacao();
            this.alertService.success('Usuário salvo com sucesso!');
          },
          error: (erro) => {
            console.error('Erro ao salvar:', erro);
            this.alertService.error(
              'Erro ao salvar o usuário. Tente novamente.'
            );
          },
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
        this.alertService.success('Usuário deletado com sucesso!');
      },
      error: (error) => {
        console.error('Erro ao deletar o usuário', error);
        this.alertService.error('Erro ao deletar o usuário. Tente novamente.');
      },
    });
  }
}
