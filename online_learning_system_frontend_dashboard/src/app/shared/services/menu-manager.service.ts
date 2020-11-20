import { Injectable } from '@angular/core';
import { User } from '../../@core/models/user-model';
import { NbMenuItem } from '@nebular/theme';
import { UserType } from '../models/common/user-type.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { LocalStorageService, UserProfileService } from '../../@core/services';

@Injectable()
export class MenuManagerService {
  public userEmail: string;

  constructor(private angularFireAuth: AngularFireAuth,
              private userProfileService: UserProfileService,
              private localStorageService: LocalStorageService) {
    angularFireAuth.authState.subscribe((state) => {
      if (state) {
        this.userEmail = state.email;
      }
    });
  }

  public getMenuItems(): NbMenuItem[] {
    let menuItems = [];
    this.userProfileService.userProfile.subscribe((user: User) => {
      this.localStorageService.setData('user', JSON.stringify(user));
      switch (user.type) {
        case UserType.ADMIN:
          menuItems = [
            {
              title: 'Administration',
              icon: 'layout-outline',
              children: [
                {
                  title: 'Student',
                  link: '/administration/students/list'
                },
                {
                  title: 'Teachers',
                  link: '/administration/teachers/list'
                },
                {
                  title: 'Payments',
                  link: '/administration/payments/list'
                },
                {
                  title: 'Reports',
                  link: '/administration/reports/generate'
                }
              ],
            }
          ];
          break;
        case UserType.TEACHER:
          menuItems = [
            {
              title: 'Teacher Portal',
              icon: 'layout-outline',
              children: [
                {
                  title: 'Assignments',
                  link: '/teacher-portal/assignment-add',
                },
                {
                  title: 'Study Materials',
                  link: '/teacher-portal/notes-add'
                },
                {
                  title: 'Reports',
                  link: '/teacher-portal/reports'
                }
              ],
            }
          ];
          break;
        case UserType.STUDENT:
          menuItems = [
            {
              title: 'Student Portal',
              icon: 'layout-outline',
              children: [
                {
                  title: 'Study Materials',
                  link: '/student-portal/assignment-view',
                }
              ],
            }
          ];
          break;
        case UserType.PARENT:
          menuItems = [
            {
              title: 'Parent Portal',
              icon: 'layout-outline',
              children: [
                {
                  title: 'Student Evaluation',
                  link: '/parent-portal/eval/view',
                },
                {
                  title: 'Payments',
                  link: '/parent-portal/payment/make'
                }
              ],
            }
          ];
          break;
        case UserType.UNKNOWN:
          break;
      }
    });
    return menuItems;
  }
}
