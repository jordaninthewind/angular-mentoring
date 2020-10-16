import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item/course-item-model';
import { CoursesService } from '../services/courses.service';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  faPlusSquare = faPlusSquare;

  public courses: CourseItem[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  // Filter logic

  // Add Course Click Handler to Open Form Modal

  // Load more button

  loadMore(): void {
    console.log('this is loading more');
  }

}
