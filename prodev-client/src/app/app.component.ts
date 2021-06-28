import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prodev-client';

  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (_user) => (this.currentUser = _user)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
