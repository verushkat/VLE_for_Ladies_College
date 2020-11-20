import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CoreConstants } from '../core.constants';
import { HttpStatus } from '../../shared/models/common/http-status';
import { AuthErrorHandlerService } from './authentication-error-handler.service';
import { NotificationService } from '../../shared/services/notification.service';

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {

  private static handleClientSideError(status: number): string {
    switch (status) {
      case HttpStatus.NO_INTERNET_CONNECTION:
        return CoreConstants.NO_INTERNET_CONNECTION_ERROR_NOTIFICATION_MESSAGE;
      case HttpStatus.NOT_FOUND:
        return CoreConstants.REQUEST_FAILURE_ERROR_NOTIFICATION_MESSAGE;
      default:
        return;
    }
  }

  constructor(private authErrorHandlerService: AuthErrorHandlerService,
              private notificationService: NotificationService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = '';
    try {
      token = localStorage.getItem('auth_token');
    } catch (e) {

    }
    req = req.clone({
      setHeaders: {
        Authorization: token
      }
    });
    return next.handle(req).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          this.onError(err);
        }
        return throwError(err);
      })
    );
  }

  private onError(response: HttpErrorResponse): void {
    // const type: AlertType = AlertType.ERROR;

    const clientErrorMessage = AppHttpInterceptorService.handleClientSideError(response.status);
    if (clientErrorMessage) {
      this.notificationService.showToast('danger', 'Error', clientErrorMessage);
      return;
    }

    const serverErrorMessage = this.handleServerError(response.status);
    if (serverErrorMessage) {
      this.notificationService.showToast('danger', 'Error', serverErrorMessage);
    }
  }

  private handleServerError(errorResponse: number): string {
    let message: string;
    if (errorResponse) {
      const code = errorResponse;
      if (code === CoreConstants.UNAUTHORIZED_STATUS_CODE) {
        this.authErrorHandlerService.handleError(HttpStatus.UNAUTHORIZED);
        return;
      }

      if (code === CoreConstants.FORBIDDEN_STATUS_CODE) {
        this.authErrorHandlerService.handleError(HttpStatus.FORBIDDEN);
        return;
      }

      message = `${errorResponse} : Internal Server Error`;
    } else {
      message = CoreConstants.INTERNAL_SERVER_ERROR_NOTIFICATION_MESSAGE;
    }

    return message;
  }
}
