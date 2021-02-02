import { Component, OnChanges, OnInit } from '@angular/core';
import { faUser, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faWindowClose = faWindowClose;

  isAuthenticated: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
  }

  logout(): void {
    this.authService.logout();
  }
}
