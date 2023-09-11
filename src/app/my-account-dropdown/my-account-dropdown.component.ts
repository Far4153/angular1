import { Component } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(private router: Router) {}

navigateToLogin(pagename: string):void {
  this.router.navigate([`${pagename}`]);
}
}




