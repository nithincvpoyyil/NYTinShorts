import { Article, ArticleSections } from './model';
import { ArticleActionTypes, ArticleActionUnion } from './actions';

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

export const getArticles = (state: State) => state.articles;

export const getFilterType = (state: State) => state.filter;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;
