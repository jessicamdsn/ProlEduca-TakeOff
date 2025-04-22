import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardInstituicaoComponent } from '../card-instituicao/card-instituicao.component';
@Component({
  selector: 'app-institution-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardInstituicaoComponent],
  templateUrl:'./institution-form.component.html',
  styleUrls: ['./institution-form.component.scss']
})
export class InstitutionFormComponent implements OnInit {
  form!: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    // Inicializar o formulário com todos os controles necessários
    this.form = this.fb.group({
      // Dados da Instituição
      cnpj: ['', Validators.required],
      complemento: [''],
      razaoSocial: ['', Validators.required],
      numero: ['', Validators.required],
      cep: ['', Validators.required],
      cidade: ['', Validators.required],
      rua: ['', Validators.required],
      estado: ['', Validators.required],
      status: [''],
      tipo: ['', Validators.required],
      
      // Dados do Responsável
      nomeResponsavel: ['', Validators.required],
      emailResponsavel: ['', [Validators.required, Validators.email]],
      telefoneResponsavel: ['', Validators.required],
      senhaResponsavel: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Lógica para lidar com o arquivo selecionado
      console.log('Arquivo selecionado:', file.name);
    }
  }
  
  onCancel(): void {
    this.form.reset();
    // Ou navegue para outra página se necessário
  }
  
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulário enviado:', this.form.value);
      // Lógica para enviar os dados do formulário
    } else {
      // Marcar todos os campos como touched para mostrar erros de validação
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        control?.markAsTouched();
      });
    }
  }
}