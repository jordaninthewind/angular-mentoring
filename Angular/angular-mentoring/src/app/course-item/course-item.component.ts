import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output('onDeleteCourse') onDelete: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  public deleteCourse(): void {
    this.onDelete.emit(this.item.id);
  }

}
