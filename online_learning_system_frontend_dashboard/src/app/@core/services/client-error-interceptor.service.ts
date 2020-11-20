import {HttpClient} from '@angular/common/http';
import {ErrorHandler, Injectable} from '@angular/core';

/**
 * Application unexpected client error handler.
 * @implements ErrorHandler
 * Centralized error handler hook.
 */
@Injectable()
export class ClientErrorInterceptorService implements ErrorHandler {
  private static CLIENT_ERROR_HOLDER_IDENTIFIER = 'client-error-message-holder';
  private static CLIENT_ERROR_RELOAD_BUTTON_IDENTIFIER = 'btn-client-error-reload';
  private static CLIENT_ERROR_CODE = 'client-error-codes';
  private static CLIENT_ERROR_POST_ENDPOINT = '/api/log/client/error';

  private lastError: Error;

  constructor(private http: HttpClient) {
  }

  /**
   * Verify if current error is the same last error.
   * @param {Error} error Error object.
   * @return {boolean} True if current error is teh same as previous error.
   */
  private isSameError(error: Error) {
    return this.lastError.name === error.name && this.lastError.message === error.message && this.lastError.stack === error.stack;
  }

  /**
   * Handle client side error.
   * Show error message and log to console when unexpected client error occurred.
   * @param error Error object.
   */
  public handleError(error): void {
    try {
      if (error instanceof Error) {
        if (!this.lastError || !this.isSameError(error)) {
          this.lastError = error;
          const clientErrorDiv = window.document.getElementById(ClientErrorInterceptorService.CLIENT_ERROR_HOLDER_IDENTIFIER);
          const clientErrorSpan = window.document.getElementById(ClientErrorInterceptorService.CLIENT_ERROR_CODE);
          if (clientErrorDiv && clientErrorSpan) {
            clientErrorDiv.style.display = 'block';
            const errorData = {
              message: error.message,
              name: error.name,
              stack: error.stack,
              url: window.location.href
            };

            this.http
              .post(ClientErrorInterceptorService.CLIENT_ERROR_POST_ENDPOINT, errorData, {responseType: 'text'})
              .subscribe((errorCode: string) => {
                if (!clientErrorSpan.innerText) {
                  clientErrorSpan.innerText = `Error code: ${errorCode}`;
                }
              });
          }
        }
      }
    } catch (error) {
      window.console.log('Client error log failure: ', error);
    }

    window.console.error(error);
  }
}
