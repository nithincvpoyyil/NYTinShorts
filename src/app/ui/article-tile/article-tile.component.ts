import { Component, OnInit, Input } from '@angular/core';
import { IArticle, IMultimedia } from '../../core/api';

@Component({
  selector: 'app-article-tile',
  templateUrl: './article-tile.component.html',
  styleUrls: ['./article-tile.component.scss']
})
export class ArticleTileComponent implements OnInit {

  @Input() article: IArticle;

  constructor() { }

  ngOnInit() {
  }


  parseImage(article: IArticle): string {

    let url = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    if (!article) {
      return url;
    }
    const item: IMultimedia[] = article.multimedia;
    const totalItem = item && item.length ? item.length : 0;
    for (let i = (totalItem - 1); i >= 0; i--) {
      if (item[i] && item[i].url) {
        url = item[i].url;
        break;
      }
    }
    return url;
  }

}
