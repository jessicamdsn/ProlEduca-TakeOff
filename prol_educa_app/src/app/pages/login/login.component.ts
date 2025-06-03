import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { BannerLoginComponent } from '../../layout/banner-login/banner-login.component';
import { LoginService } from '../../services/login.service';
import { AlertService } from '../../shared/services/alert/alert.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BannerLoginComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const formData = this.loginForm.value;

    this.loginService.login(formData).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.access_token);
          this.alertService.success('logado com sucesso!');
        this.router.navigate(['/admin']);
      },
      error: () => {
          this.alertService.error('Email ou senha inválidos');
      }
    });
  }
}
