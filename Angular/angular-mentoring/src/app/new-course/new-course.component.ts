import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseItem } from '../course-item/course-item-model';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  // newCourse: CourseItem = {
  //   date: '', 
  //   length: 0,
  //   description: '',
  //   name: '',
  //   isTopRated: false
  // };

  form: FormGroup;

  @Output() newCourseSubmitted: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  constructor(public dialogRef: MatDialogRef<NewCourseComponent>, @Inject(MAT_DIALOG_DATA) public data: CourseItem) {}

  ngOnInit(): void { 
    // console.log('this is null: ' + this.data);
    // if (this.data !== null) this.newCourse = this.data;

    this.form = new FormGroup({
      title: new FormControl("", Validators.required),
      content: new FormControl("", Validators.required),
      creationDate: new FormControl("", Validators.required),
      duration: new FormControl(0, Validators.required),
      authors: new FormControl("", Validators.required),
    });
  }

  public get filmDuration(): number {
    return parseInt(this.form.value['duration']);
  }

  public addCourse() {
    console.log(this.form.value);
    // this.newCourseSubmitted.emit(this.newCourse);
    // this.dialogRef.close();
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}
