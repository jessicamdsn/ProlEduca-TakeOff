import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adicione esta importação
import { Router } from '@angular/router';

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
    { id: 'admin', label: 'Usuários Administradores', icon: 'admin_panel_settings' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const url = this.router.url;

    const routeMap: any = {
      'bolsistas': 'alunos',
      'instituicoes': 'instituicoes',
      'cursos': 'cursos',
      'admin': 'admin'
    };

    const matchedKey = Object.keys(routeMap).find(key => url.includes(key));

    if (matchedKey) {
      this.activeMenuItem = routeMap[matchedKey];
    }
  }
  @Output() collapsedChange = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed); // ✅ Emite o estado atualizado
  }

  setActiveMenuItem(itemId: string): void {
    this.activeMenuItem = itemId;

    const routeMap: Record<string, string> = {
      'instituicoes': '/admin/instituicoes',
      'alunos': '/admin/bolsistas',
      'cursos': '/admin/cursos',
      'admin': '/admin'
    };

    const route = routeMap[itemId];
    if(route) {
      this.router.navigate([route]);
    }else {
      console.warn('Rota não mapeada para:', itemId)
    }
  }

  logout() {
    // Aqui você pode limpar o token, redirecionar, etc.
    console.log('Usuário deslogado');
    // Exemplo:
    // this.authService.logout();
    // this.router.navigate(['/login']);
  }
}
