import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private API_KEY = '1234';
  constructor(private http: HttpClient) {}

  getNYTToken(): Promise<any> {
    this.API_KEY = 'SAVE THE API KEY';
    console.log(`initializeApp:: service function`);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }

  getAppSettings(): any {
    console.log(`Get settings for the app`);

    const promise = this.http
      .get('http://private-1ad25-initializeng.apiary-mock.com/settings')
      .toPromise()
      .then(
        settings => {
          console.log(`Settings from API: `, settings);
          return settings;
        },
        err => {
          console.log('Error of the service', err);
          return {};
        }
      );
    return promise;
  }

  getAPIKey() {
    return this.API_KEY;
  }
}
