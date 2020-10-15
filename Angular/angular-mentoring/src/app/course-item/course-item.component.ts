import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from './course-item-model';
import { faClock, faCalendar, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  faCalendar = faCalendar;
  faClock = faClock;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor() { }

  @Input() item: CourseItem;

  ngOnInit(): void {
  }

}
