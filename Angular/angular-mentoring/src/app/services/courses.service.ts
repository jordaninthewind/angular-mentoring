import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseItem } from '../course-item/course-item-model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService implements OnInit {
  public courses$: Observable<CourseItem[]>;
  public courses: CourseItem[];
  public count: number = 10;
  public baseUrl = 'http://localhost:3004';

  constructor(private _http: HttpClient) {
    this.getCourses();
  }

  ngOnInit(): void {
    this.courses = this.courses$.valueChanges
  }

  getCourses(): void {
    this.courses$ = this._http.get<CourseItem[]>(`${this.baseUrl}/courses?sort=date&count=${this.count}`, httpOptions);
  }

  public loadMore(): void {
    this.count += 10;
    this.getCourses();
  }

  createOrUpdateCourse(courseInfo: CourseItem): void {
    if (this.updateCourse(courseInfo)) return;

    this.courses.push(courseInfo);
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
    return false
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