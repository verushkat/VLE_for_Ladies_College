import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user-model';
import { UserType } from '../../shared/models/common/user-type.model';
import { NotificationService } from '../../shared/services/notification.service';
import { UserProfileService } from './user-profile.service';
import { CoreConstants } from '../core.constants';

@Injectable()
export class RoleBaseRouteService {

  constructor(private router: Router,
              private notificationService: NotificationService,
              private userProfileService: UserProfileService
  ) {}

  public isAuthorized(user: User, state: RouterStateSnapshot) {
    switch (user.type) {
      case UserType.PARENT:
        if ((state.url).includes( 'administration')
          || (state.url).includes( 'student-portal')
          || (state.url).includes('teacher-portal')) {
          this.router.navigate(['/parent-portal/eval/view']).catch((e) => {
            this.notificationService.showToast('danger', 'Routing', CoreConstants.NAVIGATION_FAILURE);
          });
          return false;
        }
        return true;
      case UserType.TEACHER:
        if ((state.url).includes( 'parent-portal')
          || (state.url).includes( 'administration')
          || (state.url).includes( 'student-portal')) {
          this.router.navigate(['/teacher-portal/assignment-add']).catch((e) => {
            this.notificationService.showToast('danger', 'Routing', CoreConstants.NAVIGATION_FAILURE);
          });
          return false;
        }
        return true;
      case UserType.STUDENT:
        if ((state.url).includes( 'administration')
          || (state.url).includes( 'parent-portal')
          || (state.url).includes( 'teacher-portal')) {
          this.router.navigate(['/student-portal/assignment-view']).catch((e) => {
            this.notificationService.showToast('danger', 'Routing', CoreConstants.NAVIGATION_FAILURE);
          });
          return false;
        }
        return true;
      case UserType.ADMIN:
        if ((state.url).includes('parent-portal')
        || (state.url).includes('student-portal')
        || (state.url).includes('teacher-portal')) {
          this.router.navigate(['/administration/students/list']).catch((e) => {
            this.notificationService.showToast('danger', 'Routing', CoreConstants.NAVIGATION_FAILURE);
          });
          return false;
        }
        return true;
      case UserType.UNKNOWN:
        this.userProfileService.logout();
        this.router.navigate(['/login']).catch((e) => {
          this.notificationService.showToast('danger', 'Routing', CoreConstants.NAVIGATION_FAILURE);
        });
        return false;
    }
  }
}
