import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    let returnString: string = '';

    if (value > 59) returnString += Math.floor(value / 60) + 'h ';

    returnString += (value % 60) + 'm';

    return returnString;
  }

}
