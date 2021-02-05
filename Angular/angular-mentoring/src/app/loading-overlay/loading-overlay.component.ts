import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {

  loading: Subscription;

  constructor(private coursesService: CoursesService, private authService: AuthService) {
    this.authService.userInfo.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
    })
  }

  ngOnInit(): void {
  }

}