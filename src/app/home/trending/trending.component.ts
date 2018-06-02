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
    return item[0] && item[0].url ? item[0].url : '';
  }

}
