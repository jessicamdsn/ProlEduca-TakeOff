import { Component } from '@angular/core';
import { BannerLoginComponent } from '../../layout/banner-login/banner-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BannerLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
