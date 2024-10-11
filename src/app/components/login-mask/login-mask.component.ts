import {Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-login-mask',
  templateUrl: './login-mask.component.html',
  styleUrls: ['./login-mask.component.css'],
  standalone: true,
  imports: [FormsModule],  // Add FormsModule here
})
export class LoginMaskComponent {
  username: string = '';
  password: string = '';

  // Emit an event when the form is submitted
  @Output() formSubmitted = new EventEmitter<{ username: string; password: string }>();

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
