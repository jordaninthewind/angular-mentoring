import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: any[]): any {
    return courses.sort((course, comp) => comp.creationDate - course.creationDate);
  }

}
