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

  @Input() item: CourseItem;
  @Output() removeCourse: EventEmitter<number> = new EventEmitter<number>();
  @Output() updateCourse: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  constructor() { }

  ngOnInit(): void {
    const isInFuture = this.item.creationDate > new Date();
    const isNewerThanAFortnite = (new Date().getTime() - this.item.creationDate.getTime()) < this.calculateDays(14);

    if (!isInFuture && isNewerThanAFortnite) {
      this.color = 'rgb(158, 198, 71)';
    } else if (isInFuture) {
      this.color = 'rgb(33, 184, 219)';
    }
  }

  public calculateDays(days: number): number {
    return 86400000 * days;
  }

  public deleteCourse(): void {
    this.removeCourse.emit(this.item.id);
  }

  public editCourse(): void {
    this.updateCourse.emit(this.item);
  }
}
