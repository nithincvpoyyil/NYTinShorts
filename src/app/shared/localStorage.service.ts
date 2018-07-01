import { Injectable } from '@angular/core';

declare const localStorage: any;

@Injectable({ providedIn: 'root' })
export class SavedSettings {
  constructor() {}
  getArticleSavedFilter(key: string): any {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }
}
