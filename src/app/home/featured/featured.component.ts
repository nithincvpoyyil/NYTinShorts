import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../../core/api';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  @Input() articles: Immutable.List<IArticle>;

  constructor() { }

  ngOnInit() {
    console.log('test:', this.articles.get(0), this.articles.get(1));
  }

}
