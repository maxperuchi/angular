import { Component } from '@angular/core';

export const CURRENCY_OPTIONS_COMBUSTIVEL = { 
  prefix: 'R$ ', 
  thousands: '.', 
  decimal: ',', 
  precision: 3 
};

export const CURRENCY_OPTIONS = { 
  prefix: 'R$ ', 
  thousands: '.', 
  decimal: ',', 
  precision: 2 
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
