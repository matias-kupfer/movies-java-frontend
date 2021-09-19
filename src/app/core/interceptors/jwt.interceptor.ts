import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor () {}

  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('jwt') != null) {
      const authReq = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
          .set('Authorization', localStorage.getItem('jwt')!)
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
