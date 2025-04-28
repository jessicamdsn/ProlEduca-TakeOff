import { Component, OnInit } from '@angular/core';
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
    { id: 'usuarios', label: 'Usuários Administradores', icon: 'admin_panel_settings' }
  ];

  constructor(private router: Router) { }

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


  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
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
