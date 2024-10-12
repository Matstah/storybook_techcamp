import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule to the imports array
  template: `
    <div *ngIf="isVisible" class="popup">
      <h2>Pop-Up</h2>
      <p>This is a pop-up message!</p>
      <button (click)="closePopUp()">Close</button>
    </div>
  `,
  styleUrls: ['./pop-up.component.css'],  // Reference the stylesheet here
})
export class PopUpComponent {
  isVisible = false;

  showPopUp() {
    this.isVisible = true;
  }

  closePopUp() {
    this.isVisible = false;
  }
}
