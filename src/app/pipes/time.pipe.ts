import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
transform(value: number): string {
  const minutes: number = Math.floor(value / 60);
  const seconds: number = value % 60;
  if (minutes > 0) {
    return ('00' + minutes).slice(-2) + ':' + ('00' + seconds).slice(-2);
  }
  return ('00' + seconds).slice(-2);
  
}

}
