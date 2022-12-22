import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string,maxCount=25): unknown {
    return value.substring(0,maxCount)
  }

}
