import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent} from "./components/button/button.component";
import {LoginMaskComponent} from "./components/login-mask/login-mask.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, LoginMaskComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <storybook-button
        [label]="'Click Me'"
        [primary]="true"
        [size]="'large'"
        (onClick)="handleButtonClick($event)"
    ></storybook-button>
    
    <app-login-mask></app-login-mask>



    <router-outlet />
  `,
  schemas: [],
  styles: [],
})
export class AppComponent {
  title = 'angular-latest';
  handleButtonClick(event: Event) {
    console.log('Button clicked!', event);
  }
}
