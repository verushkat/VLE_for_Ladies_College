import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {AuthErrorHandlerService, LocalStorageService, UserProfileService} from '../services';
import { HttpStatus } from '../../shared/models/common/http-status';
import { User } from '../models/user-model';
import { RoleBaseRouteService } from '../services';

@Injectable()
export class RouteGuard implements CanActivate {
  constructor(private userProfileService: UserProfileService,
              private authErrorHandlerService: AuthErrorHandlerService,
              private router: Router,
              private baseRouteService: RoleBaseRouteService,
              private localStorageService: LocalStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {
      return this.userProfileService.getUser(this.localStorageService.getData('email')).pipe(
        map((user: User) => {
          return this.baseRouteService.isAuthorized(user, state);
        }),
        tap((state: boolean) => {
          if (!state) {
            this.authErrorHandlerService.handleError(HttpStatus.UNAUTHORIZED);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.authErrorHandlerService.handleError(error.status);
          return of(false);
        })
      );
    }
}
