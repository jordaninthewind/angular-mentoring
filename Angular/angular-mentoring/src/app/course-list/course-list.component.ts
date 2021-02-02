import { Component, OnInit, OnChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CourseItem } from '../course-item/course-item-model';
import { CoursesService } from '../services/courses.service';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { NewCourseComponent } from '../new-course/new-course.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnChanges {
  public dialogRef: MatDialogRef<NewCourseComponent>;

  faPlusSquare = faPlusSquare;

  public newCourseVisible: boolean = false;

  public courses: CourseItem[] = [];

  public filter: string;

  constructor(private coursesService: CoursesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  ngOnChanges(): void {
    console.log('on changes');
  }

  get totalCourseLength(): Number {
    return this.coursesService.totalCoursesLength;
  };

  public loadMore(): void {
    console.log('this is loading more');
  }

  public onFilterClick(filter: string): void {
    this.filter = filter;
  }

  public onDeleteCourseNode(id: number): void {
    const courseName = this.coursesService.getItemById(id).title;
    if (window.confirm(`Are you sure you want to delete '${courseName}'?`)) {
      this.courses = this.courses.filter(course => course.id !== id);
    }
  }

  public updateCourseNode(item: CourseItem) {
    this.coursesService.updateCourse(item);
  }

  public openNewCourseModal(event: any, data: any): void {
    this.dialogRef = this.dialog.open(NewCourseComponent);

    const submitSubscription = this.dialogRef.componentInstance.newCourseSubmitted.subscribe(result => {
      this.coursesService.createCourse(result);
      submitSubscription.unsubscribe();
    });
  }
}
