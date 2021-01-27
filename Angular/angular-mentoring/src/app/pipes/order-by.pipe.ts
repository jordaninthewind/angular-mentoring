import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../course-item/course-item-model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: CourseItem[]): any {
    return courses?.sort((course, comp) => {
      return parseInt(comp.date) - parseInt(course.date);
    });
  }

}
