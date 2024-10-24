import { Component, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class AppComponent {
  title = 'tcc-dashboard';
}
