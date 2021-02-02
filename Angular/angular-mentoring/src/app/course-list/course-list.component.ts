import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseItem } from '../course-item/course-item-model';
import { CoursesService } from '../services/courses.service';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnChanges {
  faPlusSquare = faPlusSquare;

  public courses: CourseItem[] = [];

  public filter: string;

  constructor(private coursesService: CoursesService) { }

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
    if (window.confirm('Are you sure you want to delete this course?')) {
      this.courses = this.courses.filter(course => course.id !== id);
    }
  }

  public updateCourseNode(item: CourseItem) {
    this.coursesService.updateCourse(item);
  }

  public addNewCourse(): void {
    // toggle modal
    console.log('added new course');
  }
}
