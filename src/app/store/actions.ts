import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum NavigationActionTypes {
  GO = '[Router] Go',
  BACK = '[Router] Back',
  FORWARD = '[Router] Forward',
  URL_CHANGE = '[Router] URL_CHANGE'
}

/**
  store.dispatch(new RouterActions.Go({
  path: ['/path', { routeParam: 1 }],
  query: { page: 1 },
  extras: { replaceUrl: false }
});
 */
export class Go implements Action {
  readonly type = NavigationActionTypes.GO;
  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Back implements Action {
  readonly type = NavigationActionTypes.BACK;
}

export class Forward implements Action {
  readonly type = NavigationActionTypes.FORWARD;
}

export class RouterChange implements Action {
  readonly type = NavigationActionTypes.URL_CHANGE;
}

export type RouterActionsUnion = Go | Back | Forward;
