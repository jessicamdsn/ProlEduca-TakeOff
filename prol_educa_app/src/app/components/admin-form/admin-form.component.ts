import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardInstituicaoComponent } from '../card-instituicao/card-instituicao.component';
import { AdmService } from '../../services/adm.service';


@Component({
  selector: 'app-admin-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardInstituicaoComponent],
  templateUrl: './admin-form.component.html',
  styleUrl: './admin-form.component.scss'
})
export class AdminFormComponent {
  
form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private admService: AdmService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { nome, email, senha, confirmarSenha } = this.form.value;

      if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
      }

      this.admService.createNewAdm(nome, email, senha).subscribe({
        next: (response) => {
          console.log('Administrador criado:', response);
          alert('Administrador criado com sucesso!');
          this.form.reset();
        },
        error: (error) => {
          console.error('Erro ao criar administrador:', error);
          alert('Erro ao criar administrador.');
        }
      });
    } else {
      // Object.keys(this.form.controls).forEach(key => {
      //           const control = this.form.get(key);
      //           control?.markAsTouched();
      //         });
      alert('Preencha todos os campos corretamente.');
    }
  }

  onCancel() {
    this.form.reset();
  }



 }
