import { Component, OnInit } from '@angular/core';
import { NYTService } from '../../core/api/nyt.service';
import { INYTRespose, IMultimedia, IArticle } from '../../core/api';
import * as Immutable from 'immutable';
import * as fromArticles from '../store';
import { Store, select } from '@ngrx/store';
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

  constructor(
    private nytService: NYTService,
    private store: Store<fromArticles.State>
  ) {
    //    this.articles$ = this.store.pipe(select(fromArticles.getArticles));

    this.store.select('articles').subscribe((state: any) => {
      this.featured = state.articles.slice(0, 5);
      this.resultSet = state.articles.slice(5, state.articles.length);
    });
  }

  ngOnInit() {
    // this.nytService.getNYTtrendingArticles().subscribe((data: INYTRespose) => {
    //   this.articleRespose = Immutable.Map<string, any>(data);
    //   this.articleRespose.delete('results');
    //   let featured: IArticle[] = data.results.slice(0, 5);
    //   let nonFeatured: IArticle[] = data.results.slice(5, data.results.length);
    //   this.resultSet = Immutable.List<IArticle>(nonFeatured);
    //   this.featured = Immutable.List<IArticle>(featured);
    //   featured = null;
    //   nonFeatured = null;
    //   data = null;
    // });

    this.store.dispatch(new ShowAllAction(ArticleSections.HOME));
  }

  parseImage(item: IMultimedia[]): string {
    const totalItem = item && item.length ? item.length : 0;
    let url =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    for (let i = totalItem - 1; i >= 0; i--) {
      if (item[i] && item[i].url) {
        url = item[i].url;
        break;
      }
    }
    return url;
  }
}
