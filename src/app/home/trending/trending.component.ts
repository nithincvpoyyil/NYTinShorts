import { Component, OnInit } from '@angular/core';
import { NYTService } from '../../core/api/nyt.service';
import { INYTRespose, IMultimedia, IResultSet } from '../../core/api';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  public articleRespose: Immutable.Map<string, any>;
  public resultSet: Immutable.List<IResultSet>;

  constructor(private nytService: NYTService) { }

  ngOnInit() {
    this.nytService.getNYTtrendingArticles().subscribe((data: INYTRespose) => {
      console.log(data);
      this.articleRespose = Immutable.Map<string, any>(data);
      this.articleRespose.delete('results');

      this.resultSet = Immutable.List<IResultSet>(data.results);
      data = null;
    });
  }

  parseImage(item: IMultimedia[]): string {
    const totalItem = item && item.length ? item.length : 0;
    let url = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    for (let i = (totalItem - 1); i >= 0; i--) {
      if (item[i] && item[i].url) {
        url = item[i].url;
        break;
      }
    }
    return url;
  }

}
