import { Component, OnChanges } from '@angular/core';
import { faUser, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faUser = faUser;
  faWindowClose = faWindowClose;

  authSubscription: Subscription;
  user: UserModel;

  constructor(private authService: AuthService) {
    this.authSubscription = this.authService.getUserInfoObservable().subscribe(
      userResponse => {
        this.user = userResponse;
      });
  }

  logout(): void {
    this.authService.logout();  
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
