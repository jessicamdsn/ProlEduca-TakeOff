import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ScholarshipService } from '../../services/scholarship-service/scholarship.service'; 
import { AlertComponent } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-scholarship-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AlertComponent],
  templateUrl: './scholarship-forms.component.html',
  styleUrls: ['./scholarship-forms.component.scss']
})
export class ScholarshipFormsComponent {

  alertMessage: string | null = null;
  alertType: 'success' | 'error' | 'info' = 'info';

  mostrarAlerta(mensagem: string, tipo: 'success' | 'error' | 'info' = 'info') {
    this.alertMessage = mensagem;
    this.alertType = tipo;
    setTimeout(() => this.alertMessage = null, 5000); // some após 5s
  }

  currentStep: number = 1;
  formStep1: FormGroup;
  formStep2: FormGroup;

 constructor(private fb: FormBuilder, private scholarshipService: ScholarshipService) {
  this.formStep1 = this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    nascimento: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', Validators.required],
    endereco: ['', Validators.required],
    bolsista: this.fb.control(false)
  });
  

  this.formStep2 = this.fb.group({
    nomeBolsista: [''],
    cpfBolsista: [''],
    dataNascimentoBolsista: [''],
    necessidadesEspeciais: [''],
    racaCor: ['']
  });
}

isCurrentFormValid(): boolean {
  if (this.currentStep === 1) {
    return this.formStep1.valid;
  } else if (this.currentStep === 2) {
    return this.formStep2.valid;
  }
  return false;
}

  get bolsistaControl(): FormControl {
    return this.formStep1.get('bolsista') as FormControl;
  }

  goToNextStep() {
    if (this.formStep1.valid) {
      this.currentStep = 2;
    } else {
      this.mostrarAlerta("Por favor, preencha todos os campos obrigatórios.", 'error');
    }
  }
  
  

goToPreviousStep() {
  this.currentStep = 1;
}
onBolsistaChange(event: Event) {
  const isChecked = (event.target as HTMLInputElement).checked;

  if (isChecked) {
    const clienteData = this.formStep1.value; 

    // Preenche o Step 2 diretamente com os dados do Step 1
    this.formStep2.patchValue({
      nomeBolsista: clienteData.nome,
      cpfBolsista: clienteData.cpf,
      dataNascimentoBolsista: clienteData.nascimento,
    });

  } if (this.formStep2.valid) {
    // Se desmarcar, limpa os campos do Bolsista
    this.formStep2 = this.fb.group({
      nomeBolsista: ['', Validators.required],
      cpfBolsista: ['', Validators.required],
      dataNascimentoBolsista: ['', Validators.required],
      necessidadesEspeciais: ['', Validators.required],
      racaCor: ['', Validators.required]
    });
    
  }
}

finalizarCadastro() {
  if (this.formStep2.valid) {
    const dadosCliente = this.formStep1.value;
    const dadosBolsista = this.formStep2.value;

    const payload = {
      cliente: dadosCliente,
      bolsista: dadosBolsista
    };

    this.scholarshipService.cadastrarCliente(payload).subscribe({
      next: (response) => {
        console.log('Cadastro realizado com sucesso:', response);
        this.mostrarAlerta('Cadastro finalizado com sucesso!', 'success');
      },
      error: (error) => {
        console.error('Erro ao finalizar cadastro:', error);
        this.mostrarAlerta('Erro ao finalizar cadastro. Tente novamente.', 'error');
      }
    });
  } else {
    this.mostrarAlerta('Preencha corretamente os dados do bolsista antes de finalizar.', 'error');
  }
}

}