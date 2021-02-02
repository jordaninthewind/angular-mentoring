import { Component, OnInit, OnChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CourseItem } from '../course-item/course-item-model';
import { CoursesService } from '../services/courses.service';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { NewCourseComponent } from '../new-course/new-course.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public dialogRef: MatDialogRef<NewCourseComponent>;

  faPlusSquare = faPlusSquare;

  public newCourseVisible: boolean = false;

  public courses: CourseItem[];

  public filter: string;

  public params: string;

  public loading: boolean = false;

  constructor(private coursesService: CoursesService, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCourses();

    this.params = this.route.snapshot.params.id;

    if (this.params) this.openNewCourseModal(this.params);
  }

  public loadCourses(filter: string = ''): void {
    this.loading = true;
    this.coursesService.getCourses(filter).subscribe(response => {
      this.courses = response;
      this.loading = false;
    });
  }

  public loadMore(): void {
    this.coursesService.loadMore();
    this.loadCourses();
  }

  public onDeleteCourseNode(id: number): void {
    // const item = this.coursesService.getItemById(id);

    if (window.confirm(`Are you sure you want to delete this item?`)) {
      // if (window.confirm(`Are you sure you want to delete '${ item.name }'?`)) {
      // this.courses = this.courses.filter(course => course.id !== id);
      // Delete logic for courses on backend
    }
  }

  public updateCourseNode(item: CourseItem) {
    this.coursesService.updateCourse(item);
  }

  public openNewCourseModal(data: any): void {
    let item: void;

    if (typeof parseInt(data) === 'number') item = this.coursesService.getItemById(data);
    this.dialogRef = this.dialog.open(NewCourseComponent, { data: item });

    const submitSubscription = this.dialogRef.componentInstance.newCourseSubmitted.subscribe(result => {
      this.coursesService.createOrUpdateCourse(result);
      submitSubscription.unsubscribe();
    });
  }
}
