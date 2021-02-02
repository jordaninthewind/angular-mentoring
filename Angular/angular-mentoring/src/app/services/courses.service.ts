import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseItem } from '../course-item/course-item-model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public baseUrl = 'http://localhost:3004';
  public count: number = 10;

  constructor(private _http: HttpClient) {}

  getCourses(filter = ''): Observable<CourseItem[]> {
    return this._http.get<CourseItem[]>(`${this.baseUrl}/courses?sort=date&count=${this.count}&textFragment=${filter}`, httpOptions);
  }

  public loadMore(): void {
    this.count += 10;
    this.getCourses();
  }

  createOrUpdateCourse(courseInfo: CourseItem): void {
    if (this.updateCourse(courseInfo)) return;

    // this.courses.push(courseInfo);
  }

  deleteCourse(courseToDelete: CourseItem): void {
    // this.courses = this.courses.filter(i => i.id !== courseToDelete.id);
    // ADD BACKEND DELETE CALL HERE
  }

  updateCourse(courseInfo: CourseItem): boolean {
    // const course = this.getItemById(courseInfo.id);

    // if (course) {
    //   const keys = Object.keys(course);

    //   keys.forEach(key => course[key] = courseInfo[key]);
    //   return true;
    // }
    this.getCourses();
    return true;
  }

  // getItemById(id: number): CourseItem {
  getItemById(id: number): void {
    return ;
    // return this.courses.find(course => course.id == id);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  })
}