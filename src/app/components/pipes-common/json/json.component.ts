import { Component } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent {
persona= {
  'nombre': 'Matias',
  'apellido': 'Sabbadini',
  'ocupacion': 'developer'
}
}
