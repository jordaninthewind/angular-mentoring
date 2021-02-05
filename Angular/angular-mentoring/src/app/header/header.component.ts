import { Component, OnChanges } from '@angular/core';
import { faUser, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { selectUserAuth } from '../state/auth/auth.selectors';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faUser = faUser;
  faWindowClose = faWindowClose;

  authSubscription: Subscription;
  
  user$ = this.store.pipe(select(selectUserAuth));

  constructor(private authService: AuthService, private store: Store) {}

  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
