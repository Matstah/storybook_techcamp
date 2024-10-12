import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {PopUpComponent} from "../pop-up/pop-up.component";  // Import FormsModule

@Component({
  selector: 'app-login-mask',
  templateUrl: './login-mask.component.html',
  styleUrls: ['./login-mask.component.css'],
  standalone: true,
  imports: [FormsModule, PopUpComponent],  // Add FormsModule here
})
export class LoginMaskComponent {
  username: string = '';
  password: string = '';



  // Emit an event when the form is submitted
  @Output() formSubmitted = new EventEmitter<{ username: string; password: string }>();

  @ViewChild(PopUpComponent) popupComponent!: PopUpComponent; // Reference to PopUpComponent
  showPopup() {
    if (this.popupComponent) {
      this.popupComponent.showPopUp(); // Show the pop-up when the button is clicked
    }
  }

  // Method to handle form submission
  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    if (this.username && this.password) {
      this.formSubmitted.emit({ username: this.username, password: this.password });
    } else {
      console.log('Username and password are required.');
    }
    // Add your login logic here
  }

}
