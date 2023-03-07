import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'darkmode',
})
export class DarkModePipes implements PipeTransform {
  transform(value: boolean) {
    return value ? 'bg-dark  text-white' : 'bg-ligth text-dark';
  }
}
