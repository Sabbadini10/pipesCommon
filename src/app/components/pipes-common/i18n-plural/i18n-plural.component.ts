import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-plural',
  templateUrl: './i18n-plural.component.html',
  styleUrls: ['./i18n-plural.component.css']
})
export class I18nPluralComponent {
notificaciones = 0;

mensajes ={
  '=0': 'No tienes notificaciones',
  '=1': 'Tienes # notificacion',
  '=2': 'Tienes # notificaciones',
  other: 'Tienes # notificaciones'
}

addNotificacion() {
  this.notificaciones++
}
}
