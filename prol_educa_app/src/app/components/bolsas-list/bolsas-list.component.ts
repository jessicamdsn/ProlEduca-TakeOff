import { Component, OnInit } from '@angular/core';
import { BolsasService } from '../../services/bolsas-services/bolsas.service';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MOCK_BOLSAS } from '../../../assets/MOCK_BOLSAS';
import { RouterLink } from '@angular/router';


interface Filtros {
  instituicao: string;
  estado: string;
  cidade: string;
  bairro: string;
  curso: string;
  turno: string[];
  modalidade: string;
  alt: string;
  serie: string;
}

@Component({
  selector: 'app-bolsas-list',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass, RouterLink],
  templateUrl: './bolsas-list.component.html',
  styleUrl: './bolsas-list.component.scss',
})
export class BolsasListComponent implements OnInit {
  instituicoes: string[] = [];
  estados: string[] = [];
  cursos: string[] = [];
  cidade: string[] = [];
  bairro: string[] = [];
  modalidade: string[] = [];
  alt: string[] = [];
  serie: string[] = [];

  bolsas: any[] = [];
  bolsasFiltradas: any[] = [];


  paginaAtual: number = 1;
  itensPorPagina: number = 4;

  filtros: Filtros = {
    instituicao: '',
    estado: '',
    cidade: '',
    bairro: '',
    curso: '',
    turno: [],
    modalidade: '',
    alt: '',
    serie: '',
  };

  turnoSelecionado: { [key: string]: boolean } = {
    Manhã: false,
    Tarde: false,
    Noite: false,
    Integral: false,
  };

  constructor(private bolsaService: BolsasService) { }

  ngOnInit(): void {
  this.bolsaService.getBolsas().subscribe({
    next: (dados) => {
       this.bolsas = [...MOCK_BOLSAS];
      this.bolsasFiltradas = [...this.bolsas];

      this.instituicoes = [...new Set(this.bolsas.map((b:any) => b.instituicao))];
      this.estados = [...new Set(this.bolsas.map((b:any) => b.estado))];
      this.cursos = [...new Set(this.bolsas.map((b:any) => b.curso))];
      this.cidade = [...new Set(this.bolsas.map((b:any) => b.cidade))];
      this.bairro = [...new Set(this.bolsas.map((b:any) => b.bairro))];
      this.modalidade = [...new Set(this.bolsas.map((b:any) => b.modalidade))];
      this.alt = [...new Set(this.bolsas.map((b:any) => b.alt))];
      this.serie = [...new Set(this.bolsas.map((b:any) => b.serie))];
    },
    error: (err) => {
      console.error('Erro ao carregar bolsas:', err);
      this.bolsas = [];
      this.bolsasFiltradas = [];
    }
  });
}


  selecionarFiltro(tipo: Exclude<keyof Filtros, 'turno'>, valor: string) {
    this.filtros[tipo] = valor;
    this.filtrarBolsas();
  }
  filtrarBolsas() {
    this.paginaAtual = 1;

    this.bolsasFiltradas = this.bolsas.filter((bolsa) => {
      const normalizar = (valor: string) =>
        valor?.toLowerCase().trim() || '';

      return (
        (!this.filtros.instituicao ||
          normalizar(bolsa.instituicao) === normalizar(this.filtros.instituicao)) &&
        (!this.filtros.estado ||
          normalizar(bolsa.estado) === normalizar(this.filtros.estado)) &&
        (!this.filtros.cidade ||
          normalizar(bolsa.cidade) === normalizar(this.filtros.cidade)) &&
        (!this.filtros.bairro ||
          normalizar(bolsa.bairro) === normalizar(this.filtros.bairro)) &&
        (!this.filtros.curso ||
          normalizar(bolsa.curso) === normalizar(this.filtros.curso)) &&
        (this.filtros.turno.length === 0 ||
          this.filtros.turno.includes(bolsa.turno)) &&
        (!this.filtros.modalidade ||
          normalizar(bolsa.modalidade) === normalizar(this.filtros.modalidade)) &&
        (!this.filtros.serie ||
          normalizar(bolsa.serie) === normalizar(this.filtros.serie)) &&
        (!this.filtros.alt ||
          normalizar(bolsa.alt) === normalizar(this.filtros.alt))
      );
    });
  }



  toggleTurno(selecionado: boolean, turno: string) {
    if (selecionado) {
      this.filtros.turno.push(turno);
    } else {
      this.filtros.turno = this.filtros.turno.filter((t) => t !== turno);
    }
    this.filtrarBolsas();
  }

  limparFiltros() {
    this.filtros = {
      instituicao: '',
      estado: '',
      cidade: '',
      bairro: '',
      curso: '',
      turno: [],
      modalidade: '',
      alt: '',
      serie: '',
    };

    this.turnoSelecionado = {
      Manhã: false,
      Tarde: false,
      Noite: false,
      Integral: false,
    };

    this.filtrarBolsas();
  }



  get totalPaginas(): number {
    return Math.ceil(this.bolsasFiltradas.length / this.itensPorPagina);
  }

  get bolsasPaginadas(): any[] {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    return this.bolsasFiltradas.slice(inicio, fim);
  }

  mudarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaAtual = pagina;
    }
  }

  ordemPrecoAsc = true;


  ordenarPorPreco() {
    this.ordemPrecoAsc = !this.ordemPrecoAsc;

    this.bolsasFiltradas.sort((a: any, b: any) => {
      const precoA = parseFloat(String(a.precoComDesconto).replace(',', '.'));
      const precoB = parseFloat(String(b.precoComDesconto).replace(',', '.'));
      return this.ordemPrecoAsc ? precoA - precoB : precoB - precoA;
    });

    this.paginaAtual = 1;
  }


}
