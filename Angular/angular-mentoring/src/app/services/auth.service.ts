import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  possibleUsers: UserModel[] = [
    {id: 1,
      firstName: 'Jordan',
      lastName: 'Kline',
      email: 'jordan@jordan.com',
      password: 'admin',  
    },
  ];

  user: UserModel;

  constructor(private window: Window, private router: Router) { }

  login(email: String, password: String): void {
    const currentUser = this.possibleUsers.find(user => user.email == email);
    if (!currentUser) {
      throw new Error('This user does not exist');
    } else if (currentUser.password != password) {
      throw new Error('The password does not match our records for this user.');
    } else {
      this.window.localStorage.setItem('isAuthenticated', 'true');
      this.router.navigateByUrl('/courses');
    }
  }

  logout(): void {
    this.user = undefined;
    this.window.localStorage.removeItem('isAuthenticated');
    this.router.navigateByUrl('/login');
  }

  get isAuthenticated(): boolean {
    return !!this.window.localStorage.getItem('isAuthenticated');
  }

  getUserInfo(): UserModel {
    return this.user;
  }
}
