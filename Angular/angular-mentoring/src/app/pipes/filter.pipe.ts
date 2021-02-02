import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], filter: string): any {
    const emptyFilter = (filter ?? '').length === 0;

    if (emptyFilter) {
      return values;
    }

    filter = filter.toLowerCase();
    values = values.filter(({ title, content }) => {
      return title.toLowerCase().includes(filter) || content.toLowerCase().includes(filter);
    });

    return values;
  }
}