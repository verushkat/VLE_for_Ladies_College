import { Router } from '@angular/router';
import { UserProfileService } from './user-profile.service';
import { HttpStatus } from '../../shared/models/common/http-status';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthErrorHandlerService {
  constructor(private router: Router,
              private userProfileService: UserProfileService) {
  }

  public handleError(status: HttpStatus): void {
    if (status === HttpStatus.FORBIDDEN || status === HttpStatus.UNAUTHORIZED) {
      this.userProfileService.logout();
      this.router.navigate(['/unauthorized']).catch(() => {
        // this.notificationService.showNotification(CoreConstants.NAVIGATION_FAILURE, AlertType.ERROR);
      });
    } else {
      this.router.navigate(['/load-failure']).catch(() => {
        // this.notificationService.showNotification(CoreConstants.NAVIGATION_FAILURE, AlertType.ERROR);
      });
    }
  }
}
