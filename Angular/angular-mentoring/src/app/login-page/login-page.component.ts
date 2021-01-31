import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
  email = '';
  password = '';
  error = '';
  subscription: Subscription;

  constructor(private authService: AuthService, private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.error = message;
    })
  }

  // Why does this work with Async/Await and an observable?
  login(): void {
      this.authService.login(this.email, this.password);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}