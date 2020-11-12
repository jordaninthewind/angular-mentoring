import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from './course-item-model';
import { faClock, faCalendar, faTrashAlt, faEdit, faStar } from '@fortawesome/free-solid-svg-icons';

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
  faStar = faStar;

  public color: string;

  constructor() { }

  @Input() item: CourseItem;

  @Output('onDeleteCourse') onDelete: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    const isInFuture = this.item.creationDate > new Date();
    const isNewerThanAFortnite = (new Date() - this.item.creationDate) < 86400000 * 14;

    if (!isInFuture && isNewerThanAFortnite) {
      this.color = 'rgb(158, 198, 71)';
    } else if (isInFuture) {
      this.color = 'rgb(33, 184, 219)';
    }
  }

  public deleteCourse(): void {
    this.onDelete.emit(this.item.id);
  }
}
