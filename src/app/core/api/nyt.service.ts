import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { INYTRespose } from './nyt.response.model';
import { ArticleSections } from '../../home/store';
import { Observable } from 'rxjs';

const API_KEY = '0c126993218841308b75051caac11b26';
const APIS: any = {
  home: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`,
  section: (section: ArticleSections) => {
    if (!section) {
      return '';
    }
    return `https://api.nytimes.com/svc/topstories/v2/${section.toLowerCase()}.json?api-key=${API_KEY}`;
  }
};

@Injectable({
  providedIn: 'root'
})
export class NYTService {
  constructor(private httpClient: HttpClient) {}
  public getNYTtrendingArticles() {
    return this.httpClient.get<INYTRespose>(APIS.home);
  }

  public getSectionWiseArticles(
    section: ArticleSections
  ): Observable<INYTRespose> {
    return this.httpClient.get<INYTRespose>(APIS.section(section));
  }
}
