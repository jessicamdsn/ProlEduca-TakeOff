import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    FormsModule
  ],
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],
})
export class EditUserDialogComponent {
  tipo: 'usuario' | 'curso' | 'insituicao';
  campos: { label: string, name: string, type: string }[] = [];
  dados: any = {};

  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.tipo = data.tipo;
    this.dados = { ...data.dados };
    this.definirCampos();
  }


  definirCampos() {
    console.log('Tipo:', this.tipo);

    switch (this.tipo) {
      case 'usuario':
        this.campos = [
          { label: 'Nome', name: 'nome', type: 'text' },
          { label: 'CPF', name: 'cpf', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Contato', name: 'contato', type: 'text' },
        ];
        break;

      case 'curso':
        this.campos = [
          { label: 'Nome do Curso', name: 'nome', type: 'text' },
          { label: 'Código da Instituição', name: 'codInstituicao', type: 'text' },
          { label: 'Vagas', name: 'vagas', type: 'number' },
          { label: 'Percentual Bolsa', name: 'percentualBolsa', type: 'number' },
        ];
        break;
      case 'insituicao':
        this.campos = [
          { label: 'Nome da Instituição', name: 'nome', type: 'text' },
          { label: 'Código da Instituição', name: 'codInstituicao', type: 'text' },
          { label: 'Vagas', name: 'vagas', type: 'number' },
          { label: 'Percentual Bolsa', name: 'percentualBolsa', type: 'number' },
        ];
        break;

      default:
        this.campos = [];
        console.warn('Tipo não reconhecido:', this.tipo);
        break;
    }
  }



  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.dados);
  }
}
