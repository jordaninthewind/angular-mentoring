import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
    // this.router.events.subscribe((event: RouterEvent) => {
    //   // console.log(event);
    // });
  }
  title = 'angular-mentoring';
}
