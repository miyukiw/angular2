import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class IssuesService {

  constructor(private http: Http) { }

  getIssues(): Promise<Object[]> {
    return this.http.get('https://api.github.com/repos/angular/angular/issues?page=1&per_page=10')
      .toPromise()
      .then(response => response.json() as Object[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
