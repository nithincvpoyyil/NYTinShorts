import { Component, OnInit, Input } from '@angular/core';
import { IArticle, IMultimedia } from '../../core/api';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {
  @Input() article: IArticle;

  constructor() {}

  ngOnInit() {
    console.log('this.article-----------------1111111122222', this.article);
  }

  parseImage(article: IArticle): string {
    let url =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    if (!article) {
      return url;
    }
    const item: IMultimedia[] = article.multimedia;
    const totalItem = item && item.length ? item.length : 0;
    for (let i = totalItem - 1; i >= 0; i--) {
      if (item[i] && item[i].url) {
        url = item[i].url;
        break;
      }
    }
    return url;
  }
}
