import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Article } from '../store';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  @Input() articles: Article;

  constructor() {}

  ngOnInit() {}
}
