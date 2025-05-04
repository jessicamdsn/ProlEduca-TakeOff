import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCardComponent } from '../../components/data-card/data-card.component';
import { WelcomeCardComponent } from '../../layout/welcome-card/welcome-card.component';
import { SidebarMenuComponent } from '../../layout/sidebar-menu/sidebar-menu.component';
import { HeaderAdminComponent } from '../../layout/header-admin/header-admin.component';

@Component({
  selector: 'app-adm-interface',
  standalone: true,
  imports: [
    CommonModule,
    DataCardComponent,
    WelcomeCardComponent,
    SidebarMenuComponent,
    HeaderAdminComponent
  ],
  templateUrl: './adm-interface.component.html',
  styleUrls: ['./adm-interface.component.scss']
})
export class AdmInterfaceComponent {
  isSidebarCollapsed = false;

  onSidebarCollapseChange(collapsed: boolean): void {
    this.isSidebarCollapsed = collapsed;
  }

  topInstituicoes = [
    { nome: 'COLÉGIO GUARARAPES', avaliacao: '0 avaliações' },
    { nome: 'ESCOLA LÁPIS DE COR', avaliacao: '0 avaliações' },
    { nome: 'EDUCANDÁRIO SÃO CAMILO', avaliacao: '0 avaliações' },
    { nome: 'COLÉGIO SOUZA LEÃO - JARDIM ATLÂNTICO - MÉDIO', avaliacao: '0 avaliações' },
    { nome: 'COLÉGIO 2001 - BAIRRO NOVO', avaliacao: '0 avaliações' },
    { nome: 'COLÉGIO 2001 - BOA VISTA', avaliacao: '0 avaliações' },
    { nome: 'COLÉGIO 2001 - JARDIM SÃO PAULO', avaliacao: '0 avaliações' },
    { nome: 'COLÉGIO NOVA OLINDA - SÃO BENEDITO', avaliacao: '0 avaliações' },
    { nome: 'COLÉGIO EXPOR A MENTE', avaliacao: '0 avaliações' },
    { nome: 'EDUCANDÁRIO JARDIM PIEDADE', avaliacao: '0 avaliações' }
  ];

  topCursos = [
    { nome: 'Grupo II - 2 Anos de Idade', avaliacao: '0 avaliações' },
    { nome: 'Grupo III - 3 Anos de Idade', avaliacao: '0 avaliações' },
    { nome: 'Grupo IV - 4 Anos de Idade', avaliacao: '0 avaliações' },
    { nome: 'Grupo V - 5 Anos de Idade', avaliacao: '0 avaliações' },
    { nome: '1º Ano - Fundamental I', avaliacao: '0 avaliações' },
    { nome: '2º Ano - Fundamental I', avaliacao: '0 avaliações' },
    { nome: '3º Ano - Fundamental I', avaliacao: '0 avaliações' },
    { nome: '4º Ano - Fundamental I', avaliacao: '0 avaliações' },
    { nome: '5º Ano - Fundamental I', avaliacao: '0 avaliações' },
    { nome: '6º Ano - Fundamental II', avaliacao: '0 avaliações' }
  ];

}
