import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], filter: string): any {
    if (filter != undefined) {
      filter = filter.toLowerCase();
      values = values.filter(value => {
        const { title, content } = value;
        return title.toLowerCase().includes(filter) || content.toLowerCase().includes(filter);
      });
    }

    return values;
  }

}
