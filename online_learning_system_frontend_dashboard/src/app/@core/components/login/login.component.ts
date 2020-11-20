import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService, UserProfileService } from '../../services';
import { MenuManagerService } from '../../../shared/services';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userProfileService: UserProfileService,
    private angularFireAuth: AngularFireAuth,
    private menuManagerService: MenuManagerService,
    private localStorageService: LocalStorageService
  ) {
    angularFireAuth.authState.subscribe((state) => {
      if (state) {
        state.getIdToken().then(token => {
          localStorageService.setData('auth_token', token);
          localStorageService.setData('email', state.email);
        });
        menuManagerService.getMenuItems();
        this.router.navigate(['/administration']);
      }
    });
  }

  public successCallback(signInData: any): void {
    this.router.navigate(['/administration']);
  }
}
