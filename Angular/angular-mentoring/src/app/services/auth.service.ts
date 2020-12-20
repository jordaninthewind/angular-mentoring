import { Injectable } from '@angular/core';
import { UserModel } from '../user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: UserModel;

  constructor(private window: Window) { }

  login(loginInfo: any): void {
    this.user = loginInfo;
    this.window.localStorage.setItem('isAuthenticated', 'true');
  }

  logout(): void {
    this.user = undefined;
    this.window.localStorage.removeItem('isAuthenticated');
  }

  get isAuthenticated(): boolean {
    return !!this.window.localStorage.getItem('isAuthenticated');
  }

  getUserInfo(): UserModel {
    return this.user;
  }
}
