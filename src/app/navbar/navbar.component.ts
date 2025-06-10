import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // This property will control whether the menu and icon have the 'open' class
  isMenuOpen: boolean = false;
  

  constructor() { }

  /**
   * Toggles the state of the hamburger menu.
   * This method will be called when the hamburger icon or a menu link is clicked.
   */

  
  toggleMenu(): void {
    // This single line does the equivalent of toggling 'open' on both
    // the menu and icon, because they will both bind to this property.
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu state toggled. Menu is now:', this.isMenuOpen ? 'Open' : 'Closed');
  }
    




}
