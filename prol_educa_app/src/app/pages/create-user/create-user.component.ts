import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BannerLoginComponent } from '../../layout/banner-login/banner-login.component';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule,
    BannerLoginComponent,
    ReactiveFormsModule
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
createUserForm: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private loginService: LoginService,  private router: Router) {
    this.createUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.createUserForm.invalid) {
      this.createUserForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.loginService.registerUser(this.createUserForm.value).subscribe({
      next: (response) => {
        console.log('Usuário criado com sucesso:', response);
        this.loading = false;

        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Erro ao criar usuário:', error);
        this.errorMessage = 'Erro ao criar usuário. Tente novamente.';
        this.loading = false;
      }
    });
  }
}
