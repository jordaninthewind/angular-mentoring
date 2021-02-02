import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService) { }

  // Why does this work with Async/Await and an observable?
  login(): void {
      this.authService.login(this.email, this.password);
      console.log(this.authService.user); // Why can't I access these values here?
      // How to bring error from authService?
  }
}