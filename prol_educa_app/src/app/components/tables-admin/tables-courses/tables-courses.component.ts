import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { EditUserDialogComponent } from '../../../shared/edit-user-dialog/edit-user-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Course,
} from '../../../services/admin-services/courses/courses.service';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-tables-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tables-courses.component.html',
  styleUrl: './tables-courses.component.scss',
})
export class TablesCoursesComponent {
  cursos: Course[] = [];
  cursosFiltrados: Course[] = [];
  cursosPaginados: Course[] = [];
  cursoSelecionado: Course | null = null;
  instituicoes: string[] = [];

  filtroInstituicao: string = '';
  filtroNome: string = '';
  filtroTurno: string = '';

  termoPesquisa: string = '';
  ordenacaoAsc = true;

  paginaAtual = 1;
  itensPorPagina = 5;
  totalPaginas: number = 0;
  paginas: number[] = [];

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private alertService: AlertService,
    private dialogEditModal: MatDialog
  ) {}

  ngOnInit() {
    this.coursesService.getCourses().subscribe((res) => {
      console.log(res);
      const courses = res.data.map((course: any) => ({
        trackingId: course.id,
        nome: course.name,
        codInstituicao: course.type,
        vagas: course.vacancies,
        percentualBolsa: course.scholarship_percentage ,
        valorOriginal: course.original_price,
        valorDesconto: course.enrollment_discount,
        turno: course.shift,
        anoBolsa: course.type,
      }));


      this.cursos = courses;
      this.cursosFiltrados = [...courses];
      this.totalPaginas = Math.ceil(courses.length / this.itensPorPagina);
      this.instituicoes = [
        ...new Set(this.cursos.map((c) => c.codInstituicao)),
      ];
      this.atualizarPaginacao();
    });
  }

  filtrarCursos() {
    this.cursosFiltrados = this.cursos.filter((curso) => {
      return (
        (this.filtroInstituicao
          ? curso.codInstituicao === this.filtroInstituicao
          : true) &&
        (this.filtroNome
          ? curso.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
          : true) &&
        (this.filtroTurno ? curso.turno === this.filtroTurno : true)
      );
    });
    this.paginaAtual = 1;
    this.atualizarPaginacao();
  }

  ordenarPorNome() {
    this.ordenacaoAsc = !this.ordenacaoAsc;
    this.cursosFiltrados.sort((a, b) => {
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
      this.cursosFiltrados.length / this.itensPorPagina
    );
    this.paginas = Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
    this.cursosPaginados = this.cursosFiltrados.slice(
      (this.paginaAtual - 1) * this.itensPorPagina,
      this.paginaAtual * this.itensPorPagina
    );
  }

  mudarPagina(pagina: number) {
    this.paginaAtual = pagina;
    this.atualizarPaginacao();
  }

  limparFiltros() {
    this.filtroInstituicao = '';
    this.filtroNome = '';
    this.filtroTurno = '';
    this.termoPesquisa = '';
    this.cursosFiltrados = [...this.cursos];
    this.paginaAtual = 1;
    this.atualizarPaginacao();
  }

  capitalizarNome(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  // btn Update
  openDialogUpdate(curso: Course) {
    const dialogRef = this.dialogEditModal.open(EditUserDialogComponent, {
      width: '500px',
      data: {
        tipo: 'curso',
        dados: curso,
      },
    });

    dialogRef.afterClosed().subscribe((cursoAtualizado: Course | undefined) => {
      // if (cursoAtualizado) {
      //   this.coursesService.updateCourse(cursoAtualizado).subscribe({
      //     next: (updateCourse) => {
      //       const index = this.cursosFiltrados.findIndex(
      //         (c: Course) =>
      //           c.trackingId === (updateCourse as Course).trackingId
      //       );
      //       if (index !== -1) {
      //         this.cursosFiltrados[index] = updateCourse as Course;
      //       }
      //       this.atualizarPaginacao();
      //       this.alertService.success('Curso atualizado com sucesso!');
      //     },
      //     error: (erro) => {
      //       console.error('Erro ao salvar:', erro);
      //       this.alertService.error('Erro ao salvar o curso. Tente novamente.');
      //     },
      //   });
      // }
    });
  }

  // btn Delete
  openDialogDelete(curso: Course) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        mensagem:
          'Você tem certeza que deseja excluir o curso ' +
          this.capitalizarNome(curso.nome) +
          '?',
      },
    });

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this.deleteUser(curso);
      }
    });
  }

  deleteUser(course: Course) {
    // this.coursesService.deleteCourse(course.trackingId).subscribe({
    //   next: () => {
    //     this.cursosFiltrados = this.cursosFiltrados.filter(
    //       (c: Course) => c.trackingId !== course.trackingId
    //     );
    //     this.atualizarPaginacao();
    //     this.alertService.success('Curso deletado com sucesso!');
    //   },
    //   error: (error) => {
    //     console.error('Erro ao deletar o curso', error);
    //     this.alertService.error('Erro ao deletar o curso. Tente novamente.');
    //   },
    // });
  }
}
