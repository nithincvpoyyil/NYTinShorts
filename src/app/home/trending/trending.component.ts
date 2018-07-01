import { Component, OnInit } from '@angular/core';
import { IMultimedia, IArticle } from '../../core/api';
import { TRANSPARENT_B64_IMG } from '../../core/constants';
import * as Immutable from 'immutable';
import * as fromArticles from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article, ShowAllAction, ArticleSections } from '../store';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  public articleRespose: Immutable.Map<string, any>;
  public resultSet: Immutable.List<IArticle>;
  public featured: Immutable.List<IArticle>;
  public articles$: Observable<Article[]>;

  constructor(private store: Store<fromArticles.State>) {
    this.store.select('articles').subscribe((state: any) => {
      this.featured = state.articles.slice(0, 5);
      this.resultSet = state.articles.slice(5, state.articles.length);
    });
  }

  ngOnInit() {
    this.store.dispatch(new ShowAllAction(ArticleSections.HOME));
  }

  parseImage(item: IMultimedia[]): string {
    const totalItem = item && item.length ? item.length : 0;
    let url = TRANSPARENT_B64_IMG;
    for (let i = totalItem - 1; i >= 0; i--) {
      if (item[i] && item[i].url) {
        url = item[i].url;
        break;
      }
    }
    return url;
  }
}
