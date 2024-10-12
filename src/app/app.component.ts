import {Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { LoginMaskComponent } from "./components/login-mask/login-mask.component";
import { PopUpComponent } from './components/pop-up/pop-up.component'; // Import PopUpComponent
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, LoginMaskComponent, PopUpComponent, CommonModule],  // Add CommonModule here
  template: `
    <h1>Welcome to {{title}}!</h1>

    <app-pop-up #popup></app-pop-up>

    <storybook-button
        [label]="'Click Me'"
        [primary]="true"
        [size]="'large'"
        (onClick)="handleButtonClick($event)"
    ></storybook-button>

    <app-login-mask></app-login-mask>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-demo-app';
  // Correct reference using ViewChild to access PopUpComponent
  @ViewChild('popup') popup!: PopUpComponent;

  handleButtonClick(event: Event) {
    console.log('Button clicked!', event);
    this.popup.showPopUp();
  }

  // Method to show the popup
  showPopUp() {
    this.popup.showPopUp();  // Call the showPopUp() method from PopUpComponent
  }
}
