import { Component } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent {
frutas: Array<String> = ['manzana', 'uvas', 'peras', 'anana', 'mandarina' ];
letras : string  = "abcdefghij";
}
