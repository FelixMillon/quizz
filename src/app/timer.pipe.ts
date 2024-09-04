import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {
  transform(value: Date): number {
    const currentDate = new Date()
    return Math.floor(Math.abs(currentDate.getTime() - value.getTime())/ 1000);
  }
}
