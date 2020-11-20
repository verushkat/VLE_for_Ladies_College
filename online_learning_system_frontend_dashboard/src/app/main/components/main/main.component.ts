import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { UserProfileService } from '../../../@core/services';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuManagerService } from '../../../shared/services';

/**
 * Component class for showing main view.
 * @class AppMainComponent
 */
@Component({
  // animations: [Animation.routeFadeIn],
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class AppMainComponent {
  public menu: NbMenuItem[];

  constructor(private router: Router,
              private userProfileService: UserProfileService,
              private angularFireAuth: AngularFireAuth,
              private menuManagerService: MenuManagerService
  ) {
    this.menu = menuManagerService.getMenuItems();
  }
}

