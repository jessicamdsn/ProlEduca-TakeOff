import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { InstituitionsService, Institution } from '../../../services/admin-services/instituitions/instituitions.service';
import { AlertService } from '../../../shared/services/alert/alert.service';

import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { EditUserDialogComponent } from '../../../shared/edit-user-dialog/edit-user-dialog.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-table-institutions',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './table-institutions.component.html',
  styleUrl: './table-institutions.component.scss'
})
export class TableInstitutionsComponent {
  instituicoes: Institution[] = [];
  instituicoesFiltradas: Institution[] = [];
  instituicoesPaginadas: Institution[] = [];

  tiposEnsino: string[] = [];
  filtroNome = '';
  filtroTipo = '';
  filtroStatus = '';
  filtroCurso = '';
  cursosDisponiveis: string[] = [];

  paginaAtual = 1;
  itensPorPagina = 5;
  totalPaginas = 0;
  paginas: number[] = [];

  constructor(
    private instituicoesService: InstituitionsService,
    private alertService: AlertService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.instituicoesService.getInstitutions().subscribe((res) => {
      this.instituicoes = res;
      this.instituicoesFiltradas = [...res];
      this.tiposEnsino = [...new Set(res.map((i) => i.type))];
      this.cursosDisponiveis = [...new Set(res.flatMap((i) => i.courses))];
      this.atualizarPaginacao();
    });
  }

  filtrarInstituicoes() {
    this.instituicoesFiltradas = this.instituicoes.filter((inst) => {

      return (
        (!this.filtroNome || inst.name.toLowerCase().includes(this.filtroNome.toLowerCase())) &&
        (!this.filtroTipo || inst.type === this.filtroTipo) &&
        (!this.filtroCurso || inst.courses.includes(this.filtroCurso)) &&
        (!this.filtroStatus || inst.status.toString() === this.filtroStatus)
      );
    });
    this.paginaAtual = 1;
    this.atualizarPaginacao();
  }

  selecionarCurso(curso: string) {
    this.filtroCurso = curso;
  }


  limparFiltros() {
    this.filtroNome = '';
    this.filtroTipo = '';
    this.filtroStatus = '';
    this.instituicoesFiltradas = [...this.instituicoes];
    this.paginaAtual = 1;
    this.filtroCurso = '';
    this.atualizarPaginacao();
  }

  atualizarPaginacao() {
    this.totalPaginas = Math.ceil(this.instituicoesFiltradas.length / this.itensPorPagina);
    this.paginas = Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
    const start = (this.paginaAtual - 1) * this.itensPorPagina;
    this.instituicoesPaginadas = this.instituicoesFiltradas.slice(start, start + this.itensPorPagina);
  }

  mudarPagina(pagina: number) {
    this.paginaAtual = pagina;
    this.atualizarPaginacao();
  }

  openDialogUpdate(instituicao: Institution) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '500px',
      data: {
        tipo: 'instituicao',
        dados: instituicao
      }
    });

    dialogRef.afterClosed().subscribe((updated: Institution | undefined) => {
      if (updated) {
        this.instituicoesService.updateInstitutions(updated).subscribe({
          next: (updateInstitutions) => {
            const index = this.instituicoesFiltradas.findIndex(
            (i : Institution) =>
              i.trackingId === (updateInstitutions as Institution).trackingId
            );
            if(index !== -1){
              this.instituicoesFiltradas[index] = updateInstitutions as Institution;
            }
            this.atualizarPaginacao();
            this.alertService.success('Instituição atualizada com sucesso!')
          },
          error: () => this.alertService.error('Erro ao atualizar. Tente novamente.')
        });
      }
    });
  }

  openDialogDelete(instituicao: Institution) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { mensagem: `Deseja excluir a instituição ${instituicao.name}?` }
    });

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) this.deleteInstituicao(instituicao);
    });
  }

  deleteInstituicao(instituicao: Institution) {
    this.instituicoesService.deleteInstituition(instituicao.trackingId).subscribe({
      next: () => {
        this.instituicoesFiltradas = this.instituicoesFiltradas.filter(i => i.trackingId !== instituicao.trackingId);
        this.alertService.success('Instituição deletada com sucesso!');
        this.atualizarPaginacao();
      },
      error: () => this.alertService.error('Erro ao deletar. Tente novamente.')
    });
  }
}
