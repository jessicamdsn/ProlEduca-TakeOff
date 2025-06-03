import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScholarshipService } from '../../services/scholarship-service/scholarship.service'; 
import { AlertComponent } from '../../shared/alert/alert.component';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-scholarship-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AlertComponent, RouterLink],
  templateUrl: './scholarship-forms.component.html',
  styleUrls: ['./scholarship-forms.component.scss']
})
export class ScholarshipFormsComponent implements OnInit {

  alertMessage: string | null = null;
  alertType: 'success' | 'error' | 'info' = 'info';

  currentStep: number = 1;
  formStep1!: FormGroup;
  formStep2!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private scholarshipService: ScholarshipService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForms();
  }

  private initForms(): void {
    this.formStep1 = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      nascimento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
      bolsista: [false]
    });

    this.formStep2 = this.createBolsistaForm();
  }

  private createBolsistaForm(): FormGroup {
    return this.fb.group({
      nomeBolsista: ['', Validators.required],
      cpfBolsista: ['', Validators.required],
      dataNascimentoBolsista: ['', Validators.required],
      necessidadesEspeciais: ['', Validators.required],
      racaCor: ['', Validators.required]
    });
  }
  
  get bolsistaControl(): FormControl {
    return this.formStep1.get('bolsista') as FormControl;
  }

  goToNextStep(): void {
    if (this.formStep1.valid) {
      this.currentStep = 2;

      if (this.bolsistaControl.value) {
        const { nome, cpf, nascimento } = this.formStep1.value;
        this.formStep2.patchValue({
          nomeBolsista: nome,
          cpfBolsista: cpf,
          dataNascimentoBolsista: nascimento
        });
      }
    } else {
      this.mostrarAlerta('Por favor, preencha todos os campos obrigatórios.', 'error');
    }
  }

  goToPreviousStep(): void {
    this.currentStep = 1;
  }

  onBolsistaChange(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
  
    if (isChecked) {
      const { nome, cpf, nascimento } = this.formStep1.value;
      this.formStep2.patchValue({
        nomeBolsista: nome,
        cpfBolsista: cpf,
        dataNascimentoBolsista: nascimento
      });
    } else {
      // Se desmarcar, limpa apenas os campos preenchidos automaticamente
      this.formStep2.patchValue({
        nomeBolsista: '',
        cpfBolsista: '',
        dataNascimentoBolsista: ''
      });
    }
  }
  
  getEmailError() {
    const email = this.formStep1.get('email');
    if (email?.hasError('required')) return 'O e-mail é obrigatório.';
    if (email?.hasError('email')) return 'Digite um e-mail válido.';
    return '';
  }
  getNomeError() {
    const nome = this.formStep1.get('nome');
    if (nome?.hasError('required')) return 'O nome é obrigatório.';
    return '';
  }
  
  getCpfError() {
    const cpf = this.formStep1.get('cpf');
    if (cpf?.hasError('required')) return 'O CPF é obrigatório.';
    if (cpf?.hasError('pattern')) return 'Digite um CPF válido com 11 dígitos.';
    return '';
  }
  
  getNascimentoError() {
    const nascimento = this.formStep1.get('nascimento');
    if (nascimento?.hasError('required')) return 'A data de nascimento é obrigatória.';
    return '';
  }
  
  getEnderecoError() {
    const endereco = this.formStep1.get('endereco');
    if (endereco?.hasError('required')) return 'O endereço é obrigatório.';
    return '';
  }
  
  getTelefoneError() {
    const telefone = this.formStep1.get('telefone');
    if (telefone?.hasError('required')) return 'O telefone é obrigatório.';
    if (telefone?.hasError('pattern')) return 'Digite um telefone válido. Ex: (81)99999-8888.';
    return '';
  }
  
  getNomeBolsistaError() {
  const nome = this.formStep2.get('nomeBolsista');
  if (nome?.hasError('required')) return 'O nome do bolsista é obrigatório.';
  return '';
}

  getCpfBolsistaError() {
    const cpf = this.formStep2.get('cpfBolsista');
    if (cpf?.hasError('required')) return 'O CPF do bolsista é obrigatório.';
    if (cpf?.hasError('pattern')) return 'Digite um CPF válido.';
    return '';
  }

  getNascimentoBolsistaError() {
    const nasc = this.formStep2.get('dataNascimentoBolsista');
    if (nasc?.hasError('required')) return 'A data de nascimento é obrigatória.';
    return '';
  }


  finalizarCadastro(): void {
    // if (this.formStep2.valid) {
    //   const payload = {
    //     cliente: this.formStep1.value,
    //     bolsista: this.formStep2.value
    //   };
  
    //   this.scholarshipService.cadastrarCliente(payload).subscribe({
    //     next: () => {
    //       this.mostrarAlerta('Cadastro finalizado com sucesso!', 'success');
  
    //       this.formStep1.reset();
    //       this.formStep2.reset();
  
    //       setTimeout(() => {
    //         this.router.navigate(['/']);
    //       }, 2000);
    //     },
    //     error: () => {
    //       this.mostrarAlerta('Erro ao finalizar cadastro. Tente novamente.', 'error');
    //     }
    //   });
    // } else {
    //   this.mostrarAlerta('Preencha corretamente os dados do bolsista antes de finalizar.', 'error');
    // }
  Swal.fire({
  icon: 'success',
  title: 'Cadastro realizado com sucesso!',
  text: 'Você será redirecionado em instantes...',
  timer: 2000, // 2 segundos
  showConfirmButton: false
}).then(() => {
  this.router.navigate(['/']);
});


  }
  
  

  mostrarAlerta(mensagem: string, tipo: 'success' | 'error' | 'info' = 'info'): void {
    this.alertMessage = mensagem;
    this.alertType = tipo;
    setTimeout(() => this.alertMessage = null, 5000);
  }
}
