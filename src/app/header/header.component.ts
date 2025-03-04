import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuOpen = false;

  // Fonction de toggle du menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
