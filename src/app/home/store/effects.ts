import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { empty, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { NYTService, INYTRespose } from '../../core/api';

import { catchError, map, switchMap } from 'rxjs/operators';
import {
  ShowAllAction,
  ArticleActionTypes,
  ShowAllSuccess,
  ShowAllFailure
} from './actions';

@Injectable()
export class ArticleEffects {
  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType<ShowAllAction>(ArticleActionTypes.SHOW_ARTICLE),
    map((action: any) => action.payload),
    switchMap(query => {
      if (query === '') {
        return empty();
      }
      return this.apiService.getSectionWiseArticles(query).pipe(
        map((response: INYTRespose) => new ShowAllSuccess(response.results)),
        catchError(err => of(new ShowAllFailure(err)))
      );
    })
  );

  constructor(private actions$: Actions, private apiService: NYTService) {}
}
