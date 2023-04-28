import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent {
  showDetails: boolean = false;
  userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-555-5555'
  };
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToEarnings() {
    this.router.navigate(['/earnings']);
  }

  signOut() {
    console.log('User signed out');
  }

  toggleDropdown() {
    this.showDetails = !this.showDetails;
  }
  
}
