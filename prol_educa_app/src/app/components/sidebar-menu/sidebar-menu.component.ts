import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SidebarMenuComponent implements OnInit {
  isCollapsed = false;
  activeMenuItem = 'instituicoes';

  @Output() collapseChange = new EventEmitter<boolean>(); // <-- aqui está o emissor!

  menuItems = [
    { id: 'instituicoes', label: 'Instituições cadastradas', icon: 'school' },
    { id: 'alunos', label: 'Alunos cadastrados', icon: 'person' },
    { id: 'cursos', label: 'Cursos Cadastrados', icon: 'book' },
    { id: 'usuarios', label: 'Usuários Administradores', icon: 'admin_panel_settings' }
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.collapseChange.emit(this.isCollapsed); // <-- notifica o componente pai!
  }

  setActiveMenuItem(itemId: string): void {
    this.activeMenuItem = itemId;
  }

  logout() {
    console.log('Usuário deslogado');
  }
}

