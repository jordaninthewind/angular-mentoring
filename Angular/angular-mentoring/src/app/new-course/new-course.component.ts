import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseItem } from '../course-item/course-item-model';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  newCourse: CourseItem = {
    date: '', 
    length: 0,
    description: '',
    name: '',
    isTopRated: false
  };

  @Output() newCourseSubmitted: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  constructor(public dialogRef: MatDialogRef<NewCourseComponent>, @Inject(MAT_DIALOG_DATA) public data: CourseItem) {}

  ngOnInit(): void { 
    console.log('this is null: ' + this.data);
    if (this.data !== null) this.newCourse = this.data;
  }

  public addCourse() {
    this.newCourseSubmitted.emit(this.newCourse);
    this.dialogRef.close();
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}
