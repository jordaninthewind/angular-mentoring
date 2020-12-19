import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  updateValue(event: Event): void {
    console.log(event);
  }

  login(): void {
    console.log('logged in');
    console.log(this.email.value);
    console.log(this.password.value);
  }

}
