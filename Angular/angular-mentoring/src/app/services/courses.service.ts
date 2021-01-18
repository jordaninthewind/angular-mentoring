import { Injectable } from '@angular/core';
import { CourseItem } from '../course-item/course-item-model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: CourseItem[] = [
    {
      creationDate: new Date('August 23, 2020'),
      duration: 90,
      content: "Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
      title: "First",
      id: 1,
      topRated: true
    },
    {
      creationDate: new Date('December 25, 2020'),
      duration: 110,
      content: "Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
      title: "Second",
      id: 2,
      topRated: false
    },
    {
      creationDate: new Date('February 25, 2020'),
      duration: 40,
      content: "Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
      title: "Third",
      id: 3,
      topRated: false
    },
    {
      creationDate: new Date('November 10, 2020'),
      duration: 60,
      content: "Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem",
      title: "Fourth",
      id: 4,
      topRated: true
    },
  ];

  public id: number = 5;

  constructor() { }

  get totalCoursesLength(): Number {
    return this.courses.length;
  }

  createOrUpdateCourse(courseInfo: CourseItem): void {    
    if (this.updateCourse(courseInfo)) return;
    
    this.courses.push(courseInfo);
  }

  deleteCourse(courseToDelete: CourseItem): void {
    this.courses = this.courses.filter(i => i.id !== courseToDelete.id);
  }

  getCourses(): CourseItem[] {
    return this.courses;
  }

  updateCourse(courseInfo: CourseItem): boolean {
    const course = this.getItemById(courseInfo.id);

    if (course) {
      const keys = Object.keys(course);

      keys.forEach(key => course[key] = courseInfo[key]);
      return true;
    }
    return false
  }

  getItemById(id: number): CourseItem {
    return this.courses.find(course => course.id == id);
  }
}
