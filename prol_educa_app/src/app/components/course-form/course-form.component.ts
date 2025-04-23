import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardInstituicaoComponent } from '../card-instituicao/card-instituicao.component';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardInstituicaoComponent],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  form!: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    // Inicializar o formulário com todos os controles necessários
    this.form = this.fb.group({
      // Dados da Instituição
      instituicaoAssociada: ['', Validators.required],
      nome: [''],
      bolsaPercentual: ['', Validators.required],
      vagas: ['', Validators.required],
      tipo: ['', Validators.required],
      valorOriginal: ['', Validators.required],
      valorDesconto: ['', Validators.required],
      turno: ['', Validators.required],
      status: [''],
      descontoEntrada: ['', Validators.required],
      
    });
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
