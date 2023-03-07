import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureValue } from '../enums/temperature.enums';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, tipo: TemperatureValue) {
    let conversion = value;

    if (tipo === TemperatureValue.F) {
      conversion = value * (9 / 5) + 32;
    }

    return `${conversion.toFixed()} °${tipo}`;
  }
}
