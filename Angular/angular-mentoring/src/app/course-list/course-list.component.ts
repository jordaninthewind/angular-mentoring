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
    console.log('on init');
    this.courses = this.coursesService.getCourses();
  }

  ngOnChanges(): void {
    console.log('on changes');
  }

  // Filter logic

  // Add Course Click Handler to Open Form Modal

  // Load more button

  get totalCourseLength(): Number {
    return this.coursesService.totalCoursesLength();
  };

  public loadMore(): void {
    console.log('this is loading more');
  }

  public onFilterClick(filter: string): void {
    this.filter = filter;
  }

  public onDeleteCourseNode(id: number): void {
    this.courses = this.courses.filter(course => course.id !== id);
  }
}
