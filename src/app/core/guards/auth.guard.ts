import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DefaultRoutes } from '../../enums/default.routes';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private router: Router) {
  }

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn: boolean = localStorage.getItem('jwt') != null;
    /*
    * not authenticated user can only go to /authenticate
    * authenticated user can go anywhere but /authenticate
    * */
    if (state.url === '/authenticate' && !isLoggedIn) {
      return true;
    } else if (state.url === '/authenticate' && isLoggedIn) {
      this.router.navigate([DefaultRoutes.onLoggedIn]);
      return false;
    } else {
      if (!isLoggedIn) {
        this.router.navigate([DefaultRoutes.onNotLoggedIn]);
        return false;
      }
      return true;
    }

  }
}
