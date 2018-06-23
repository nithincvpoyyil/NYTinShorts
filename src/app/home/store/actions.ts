import { Action } from '@ngrx/store';
import { ArticleSections } from './model';

export enum ArticleActionTypes {
  SHOW_ARTICLE = '[ARTICLE] Show All',
  SHOW_ARTICLE_SUCCESS = '[ARTICLE] Show All Success',
  SHOW_ARTICLE_FAILURE = '[ARTICLE] Show All Failure'
}

export class ShowAllAction implements Action {
  readonly type = ArticleActionTypes.SHOW_ARTICLE;
  payload: ArticleSections;
  constructor(payload: ArticleSections) {
    this.payload = payload;
  }
}

export class ShowAllSuccess implements Action {
  readonly type = ArticleActionTypes.SHOW_ARTICLE_SUCCESS;
  payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }
}
export class ShowAllFailure implements Action {
  readonly type = ArticleActionTypes.SHOW_ARTICLE_FAILURE;
  payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }
}

export type ArticleActionUnion =
  | ShowAllAction
  | ShowAllSuccess
  | ShowAllFailure;
