import { Component, OnInit, Input } from '@angular/core';
import { IResultSet, IMultimedia } from '../../core/api';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {


  @Input() article: IResultSet;

  constructor() { }

  ngOnInit() {
    console.log(this.article);
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
