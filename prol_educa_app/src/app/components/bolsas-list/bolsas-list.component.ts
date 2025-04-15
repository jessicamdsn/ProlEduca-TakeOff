import { Component, OnInit } from '@angular/core';
import { BolsasService } from '../../services/bolsas-services/bolsas.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

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
  imports: [FormsModule, NgFor, NgIf],
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

  constructor(private bolsaService: BolsasService) {}

  ngOnInit(): void {
    this.bolsaService.getBolsas().subscribe((dados) => {
      this.bolsas = dados;
      this.bolsasFiltradas = dados;

      this.instituicoes = [...new Set(dados.map((b) => b.instituicao))];
      this.estados = [...new Set(dados.map((b) => b.estado))];
      this.cursos = [...new Set(dados.map((b) => b.curso))];
      this.cidade = [...new Set(dados.map((b) => b.cidade))];
      this.bairro = [...new Set(dados.map((b) => b.bairro))];
      this.modalidade = [...new Set(dados.map((b) => b.modalidade))];
      this.alt = [...new Set(dados.map((b) => b.alt))];
      this.serie = [...new Set(dados.map((b) => b.serie))];
    });
  }

  selecionarFiltro(tipo: Exclude<keyof Filtros, 'turno'>, valor: string) {
    this.filtros[tipo] = valor;
    this.filtrarBolsas();
  }

  filtrarBolsas() {
    this.bolsasFiltradas = this.bolsas.filter((bolsa) => {
      return (
        (!this.filtros.instituicao ||
          bolsa.instituicao === this.filtros.instituicao) &&
        (!this.filtros.estado || bolsa.estado === this.filtros.estado) &&
        (!this.filtros.cidade || bolsa.cidade === this.filtros.cidade) &&
        (!this.filtros.bairro || bolsa.bairro === this.filtros.bairro) &&
        (!this.filtros.curso || bolsa.curso === this.filtros.curso) &&
        (this.filtros.turno.length === 0 ||
          this.filtros.turno.includes(bolsa.turno)) &&
        (!this.filtros.modalidade ||
          bolsa.modalidade === this.filtros.modalidade) &&
        (!this.filtros.serie || bolsa.serie === this.filtros.serie) &&
        (!this.filtros.alt || bolsa.alt === this.filtros.alt)
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
    this.filtrarBolsas();
  }
}
