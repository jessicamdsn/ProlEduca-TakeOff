import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-add',
  standalone: true,
  imports: [],
  templateUrl: './btn-add.component.html',
  styleUrl: './btn-add.component.scss'
})
export class BtnAddComponent {

  @Input() routes: string = '';
  @Input() isAliveBtnAdd: boolean = false;

  constructor(private router:Router) {}

  navegateToRoute(): void{

    const urlAtual = this.router.url;

    const routeMap:{ [key: string]: string } = {
      'instituicao': '/admin/instituicao/cadastro',
      'bolsista': 'admin/bolsista/cadastro',
      'cursos': 'admin/cursos/cadastro',
      'admin': 'admin/cadastro'
    }

    const route = Object.keys(routeMap).find(key => urlAtual.includes(key));

    if (route){
      this.router.navigate([routeMap[route]]);
    }else{
      console.error('Route not defined');
    }
  }
}
