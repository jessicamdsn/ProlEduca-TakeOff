import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../shared/services/alert/alert.service';
import { Router } from '@angular/router';
import { CardInstituicaoComponent } from '../card-instituicao/card-instituicao.component';
import { CoursesService } from '../../services/courses.service';
import { InstitutionService } from '../../services/institution.service';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardInstituicaoComponent],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss',
})
export class CourseFormComponent {
  form!: FormGroup;

  instituicoes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private courseService: CoursesService,
    private instituicoesService: InstitutionService
  ) {}

  ngOnInit(): void {
    // Inicializar o formulário com todos os controles necessários
    this.form = this.fb.group({
      // Dados da Instituição
      instituicaoAssociada: ['', Validators.required],
      nome: [''],
      bolsaPercentual: ['', Validators.required],
      vagas: ['', Validators.required],
      // tipo: ['', Validators.required],
      valorOriginal: ['', Validators.required],
      valorDesconto: ['', Validators.required],
      turno: [''],
      status: [''],
      descontoEntrada: ['', Validators.required],
    });

    this.instituicoesService.getInstitutions().subscribe((response: any) => {
      this.instituicoes = response.data;
    });
  }

  onCancel(): void {
    this.form.reset();
    this.router.navigate(['/admin/cursos']);
  }

  onSubmit(): void {
    // if (this.form.valid) {
    //   console.log('Formulário enviado:', this.form.value);
    //   this.alertService.success('Curso cadastrado com sucesso!');
    // } else {
    //   // Marcar todos os campos como touched para mostrar erros de validação
    //   Object.keys(this.form.controls).forEach((key) => {
    //     const control = this.form.get(key);
    //     control?.markAsTouched();
    //   });
    // }

    console.log('Formulário enviado:', this.form.value);
    if (this.form.valid) {
      
      console.log('entrou no if');
      this.courseService.createNewCourse(this.form.value).subscribe({
        next: () => {
          this.alertService.success('curso cadastrado com sucesso!');
          this.router.navigate(['/admin/cursos']);
        },
        error: (err) => {
          console.error(err);
          this.alertService.error('Erro ao cadastrar o curso');
        }
      });
    } else {
      console.log('entrou no else');
      Object.keys(this.form.controls).forEach((key) => {
        this.form.get(key)?.markAsTouched();
      });
    }
  }


  
}
