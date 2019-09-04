import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  ShowMessageService
} from '../_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: ShowMessageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 0) {
            this.messageService.showError('No autorizado', 'No está autorizado para acceder a este recurso');
            return throwError(error.statusText);
          }
          if (error.status === 401) {
            this.messageService.showError('No autorizado', 'No está autorizado para acceder a este recurso');
            return throwError(error.statusText);
          }
          const applicationError = error.headers.get('Application-Error');
          if (applicationError) {
            this.messageService.showError('Error de la aplicación', applicationError);
            return throwError('AplicationError');
          } else {
            const serverError = error.error;
            let modalStateErrors = '';
            if (serverError && typeof serverError === 'object') {
              for (const key in serverError) {
                if (serverError[key]) {
                  modalStateErrors += serverError[key] + '\n';
                }
              }
            }
            this.messageService.showError('Error', modalStateErrors || serverError || 'Error de servidor');
            return throwError(modalStateErrors || serverError || 'Error de servidor');
          }
        }
      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};