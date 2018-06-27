import { Article, ArticleSections } from './model';
import { ArticleActionTypes, ArticleActionUnion } from './actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  filter: ArticleSections;
  loading: boolean;
  articles: Article[];
  error?: string;
}

const initialState: State = {
  filter: ArticleSections.HOME,
  loading: false,
  articles: []
};

export function articleReducer(
  state: State = initialState,
  action: ArticleActionUnion
): State {
  switch (action.type) {
    case ArticleActionTypes.SHOW_ARTICLE:
      return { ...state, filter: action.payload, loading: true };
    case ArticleActionTypes.SHOW_ARTICLE_SUCCESS:
      return { ...state, articles: action.payload, loading: false };
    case ArticleActionTypes.SHOW_ARTICLE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...initialState, ...state };
  }
}

// selectors

export const getArticlesState = createFeatureSelector<State>('articles');

export const getArticles = createSelector(
  getArticlesState,
  state => state.articles
);

export const getFilterType = createSelector(
  getArticlesState,
  (state: State) => state.filter
);

export const getLoading = createSelector(
  getArticlesState,
  (state: State) => state.loading
);

export const getError = createSelector(
  getArticlesState,
  (state: State) => state.error
);
