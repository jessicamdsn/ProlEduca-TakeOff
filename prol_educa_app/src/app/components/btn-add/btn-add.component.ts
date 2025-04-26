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

  navegateToRoute(){
    if (this.routes){
      this.router.navigate([this.routes]);
    }else{
      console.error('Route not defined');
    }
  }
}
