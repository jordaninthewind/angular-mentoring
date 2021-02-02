import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(): void { }
  public logout(): void { }
  public isAuthenticated(): void { }
  public getUserInfo(): void { }
}
