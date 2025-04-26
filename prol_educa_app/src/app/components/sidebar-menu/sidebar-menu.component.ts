import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adicione esta importação

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  standalone: true, // Se estiver usando componentes standalone
  imports: [CommonModule] // Adicione esta linha para componentes standalone
})
export class SidebarMenuComponent implements OnInit {
  isCollapsed = false;
  activeMenuItem = 'instituicoes';
  
  menuItems = [
    { id: 'instituicoes', label: 'Instituições cadastradas', icon: 'school' },
    { id: 'alunos', label: 'Alunos cadastrados', icon: 'person' },
    { id: 'cursos', label: 'Cursos Cadastrados', icon: 'book' },
    { id: 'usuarios', label: 'Usuários Administradores', icon: 'admin_panel_settings' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  @Output() collapsedChange = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed); // ✅ Emite o estado atualizado
  }

  setActiveMenuItem(itemId: string): void {
    this.activeMenuItem = itemId;
  }

  logout() {
    // Aqui você pode limpar o token, redirecionar, etc.
    console.log('Usuário deslogado');
    // Exemplo:
    // this.authService.logout();
    // this.router.navigate(['/login']);
  }
}