import { Component } from '@angular/core';
import { UserProfileService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  styleUrls: ['./unauthorized.component.scss'],
  templateUrl: './unauthorized.component.html'
})
export class UnauthorizedComponent {

  constructor(private userProfileService: UserProfileService,
              private router: Router) {
  }

  public navigateLogin() {
    this.userProfileService.logout();
  }
}
