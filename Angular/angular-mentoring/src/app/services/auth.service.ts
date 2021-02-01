import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { MessageService } from '../message.service';
import { UserModel } from '../user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: UserModel;

  userInfo = new Subject<any>();
  private _isLoggedIn: Observable<boolean>;

  constructor(
    private window: Window,
    private router: Router,
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  login(login: String, password: String): void {
    this.http.post(authUrl, { login, password })
      .subscribe(
        data => {
          this.window.localStorage.setItem(authKey, data[authKey]);
          this.user = this.getUserInfo();
          this.router.navigateByUrl('/courses');
        },
        err => {
          this.messageService.sendErrorMessage(err.error);
        });
  }

  getUserInfo(): UserModel {
    // if (!this.isAuthenticated) return;

    this.http.post(userInfoUrl, { token: this.getToken })
      .subscribe(
        data => {
          this.user = {
            id: data['id'],
            firstName: data['name']['first'],
            lastName: data['name']['last'],
            email: data['login'],
            password: data['password'],
            token: data['fakeToken']
          };

          this.userInfo.next(this.user);
        },
        err => {
          this.messageService.sendErrorMessage(err.error);
        }
      )
  }

  logout(): void {
    this.user = undefined;
    this.window.localStorage.removeItem(authKey);

    this.router.navigateByUrl('/login');
  }

  get isAuthenticated(): boolean {
    return !!this.getToken;
  }

  get getToken(): String {
    return this.window.localStorage.getItem(authKey);
  }

  getUserInfoObservable(): Observable<any> {
    return this.userInfo.asObservable();
  }
}

const authKey = 'token';
const authUrl = 'http://localhost:3004/auth/login';
const userInfoUrl = 'http://localhost:3004/auth/userInfo';