import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromArticle from '../home/store';
export interface State {
  ui?: any;
}

export const reducers: ActionReducerMap<State> = {};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

// seelctors
export const getArticleState = createFeatureSelector<fromArticle.State>(
  'products'
);

export const getArticles = createSelector(
  getArticleState,
  fromArticle.getArticles
);

export const getFilter = createSelector(
  getArticleState,
  fromArticle.getFilterType
);

export const getLoadingStatus = createSelector(
  getArticleState,
  fromArticle.getLoading
);
export const getError = createSelector(getArticleState, fromArticle.getError);
