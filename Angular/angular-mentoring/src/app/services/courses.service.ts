import { Injectable } from '@angular/core';
import { CourseItem } from '../course-item/course-item-model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: CourseItem[] = [
    {
      date: "8/28/2020",
      duration: "1h 28 min",
      content: "Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
      title: "First",
      id: 1
    },
    {
      date: "8/28/2020",
      duration: "1h 28 min",
      content: "Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
      title: "Second",
      id: 2
    },
    {
      date: "8/28/2020",
      duration: "1h 28 min",
      content: "Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
      title: "Third",
      id: 3
    },
    {
      date: "8/28/2020",
      duration: "1h 28 min",
      content: "Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
      title: "Fourth",
      id: 4
    },
  ];

  constructor() { }

  getCourses(): CourseItem[] {
    return this.courses;
  }

  deleteCourse(courseToDelete: CourseItem): void {
    this.courses = this.courses.filter(i => i.id !== courseToDelete.id);
  }
}
