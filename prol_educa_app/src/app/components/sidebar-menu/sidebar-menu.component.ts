import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adicione esta importação
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }
  constructor() {}

  ngOnInit(): void {
    const url = this.router.url;

    const routeMap: any = {
      'users': 'alunos',
      'instituicoes': 'instituicoes',
      'courses': 'cursos',
      'manager': 'usuarios'
    };

    const matchedKey = Object.keys(routeMap).find(key => url.includes(key));

    if (matchedKey) {
      this.activeMenuItem = routeMap[matchedKey];
    }
  }
  @Output() collapsedChange = new EventEmitter<boolean>();

  toggleSidebar() {
  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed); // ✅ Emite o estado atualizado
    this.collapseChange.emit(this.isCollapsed); // <-- notifica o componente pai!
  }

  setActiveMenuItem(itemId: string): void {
    this.activeMenuItem = itemId;
  }

  logout() {
    console.log('Usuário deslogado');
  }
}


