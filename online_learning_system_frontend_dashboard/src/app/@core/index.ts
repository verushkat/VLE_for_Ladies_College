import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { LoginComponent, UnauthorizedComponent } from './components';
import {
  AppHttpInterceptorService,
  AuthErrorHandlerService,
  ClientErrorInterceptorService,
  LocalStorageService,
  RoleBaseRouteService
} from './services';
import { UserProfileService } from './services';
import { ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteGuard } from './guards';

export const COMPONENTS = [
  LoginComponent,
  UnauthorizedComponent
];

export const SERVICES = [
  AuthErrorHandlerService,
  AngularFireAuthGuard,
  UserProfileService,
  LocalStorageService,
  RoleBaseRouteService,
  RouteGuard,
  {
    provide: ErrorHandler,
    useClass: ClientErrorInterceptorService
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptorService,
    multi: true
  },
];
