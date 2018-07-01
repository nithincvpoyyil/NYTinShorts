import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, tap, switchMap, withLatestFrom } from 'rxjs/operators';
import * as RouterActions from './actions';
import { RouterDefinition } from './models';
import * as fromAppReducer from './reducers';
import { RouterNavigationAction } from '@ngrx/router-store';
import { of, empty } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class RouterEffects {
  previousRoute: any;
  currentRoute: any;

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActions.NavigationActionTypes.GO),
    map((action: RouterActions.Go) => action.payload),
    tap(({ path, query: queryParams, extras }) =>
      this.router.navigate(path, { queryParams, ...extras })
    )
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActions.NavigationActionTypes.BACK),
    tap(() => this.location.back())
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActions.NavigationActionTypes.FORWARD),
    tap(() => this.location.forward())
  );
  @Effect()
  navigationListener$ = this.actions$.ofType('ROUTER_NAVIGATION').pipe(
    switchMap(
      (routerNavigationAction: RouterNavigationAction<RouterDefinition>) => {
        console.log(
          'test : routerNavigationAction',
          routerNavigationAction.payload.routerState
        );

        if (!this.previousRoute) {
          this.currentRoute = routerNavigationAction;
        } else {
          this.previousRoute = this.currentRoute;
          this.currentRoute = routerNavigationAction;
        }
        return empty();
      }
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private store$: Store<fromAppReducer.State>
  ) {}
}
