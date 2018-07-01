import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Resolve,
  CanLoad
} from '@angular/router';
import { Observable, empty } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RouterNavGuard
  implements CanActivate, CanActivateChild, Resolve<any>, CanLoad {
  constructor(private http: HttpClient) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.isUserAuthenticated();
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }

  isUserAuthenticated(): boolean {
    return false;
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.http.get(
      'http://private-1ad25-initializeng.apiary-mock.com/settings'
    );
  }

  canLoad(): boolean {
    return this.isUserAuthenticated();
  }
}
