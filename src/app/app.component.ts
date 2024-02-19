import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppComponent {
  title = 'vicarius-test';
}
