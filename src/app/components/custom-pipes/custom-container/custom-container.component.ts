import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { TemperatureValue } from 'src/app/shared/enums/temperature.enums';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.css']
})
export class CustomContainerComponent {
  grados: number = 31;

  tipo: TemperatureValue = TemperatureValue.C;

constructor(private darkModeService: DarkModeService){}

get dark(){
  return this.darkModeService.dark
}

changeMode(){
  this.darkModeService.changeMode();
}

}
