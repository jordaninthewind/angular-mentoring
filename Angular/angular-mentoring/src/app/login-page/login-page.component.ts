import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  login(): void {
    try {
      this.authService.login(this.email, this.password);
      this.error = '';
    } catch(err) {
      this.error = err.message;
    }
  }
}