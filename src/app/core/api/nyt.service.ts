import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { INYTRespose } from './nyt.response.model';

const API_KEY = '0c126993218841308b75051caac11b26';
const APIS: any = { home: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}` };



@Injectable({
  providedIn: 'root'
})
export class NYTService {
  constructor(private httpClient: HttpClient) { }
  public getNYTtrendingArticles() {
    return this.httpClient.get<INYTRespose>(APIS.home);
  }
}



