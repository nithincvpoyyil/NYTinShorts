import { Params } from '@angular/router';

export interface RouterDefinition {
  url: string;
  queryParams: Params;
  params: Params;
  segments: string[];
}
export interface RouterState {
  currentRouter: RouterDefinition;
  previousRouter: RouterDefinition;
}

export const LOCAL_STORAGE_KEY = 'articles';
