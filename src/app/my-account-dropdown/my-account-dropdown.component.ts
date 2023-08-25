import { Component } from '@angular/core';

@Component({
  selector: 'app-my-account-dropdown',
  templateUrl: './my-account-dropdown.component.html',
  styleUrls: ['./my-account-dropdown.component.css'],
})
export class MyAccountDropdownComponent {
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}



