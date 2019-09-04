import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../_services';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  request: any;

  constructor(public tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tokenService.getTokenJWT() === null) {
      this.request = req.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      this.request = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.tokenService.getTokenJWT()}`,
          'Content-Type': 'application/json'
        }
      });
    }
    return next.handle(this.request);
  }
}

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
};
