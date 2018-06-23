import { Injectable } from '@angular/core';
import * as fromArticle from '../home/store';
@Injectable({ providedIn: 'root' })
export class MenuConfigService {
  public menuItem: any[] = [];

  articleSections = fromArticle.ArticleSections;

  constructor() {
    for (const section in this.articleSections) {
      if (section) {
        this.menuItem.push({ title: section, section: section });
      }
    }
  }
  getMenuIem(): any {
    return this.menuItem;
  }
}
