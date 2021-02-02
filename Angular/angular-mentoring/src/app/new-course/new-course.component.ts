import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CourseItem } from '../course-item/course-item-model';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  newCourse = {
    creationDate: new Date(),
    duration: 60,
    content: "Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
    title: "Fourth",
    id: 4,
    topRated: true
  };

  @Output() newCourseSubmitted: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  constructor(public dialogRef: MatDialogRef<NewCourseComponent>) { }

  ngOnInit(): void { }

  public addCourse() {
    this.newCourseSubmitted.emit(this.newCourse);
    this.dialogRef.close();
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}
