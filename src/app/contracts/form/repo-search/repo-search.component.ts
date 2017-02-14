import {Input, Component, Injectable} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  constructor(private _http: Http) {}

  search(term: string) {
    if (term === '') {
      return Observable.of([]);
    }

    let url = 'https://api.github.com/search/repositories?q=' + term;

    return this._http
      .get(url)
      .map(response => {
        return <Object[]> response.json().items
      });
  }
}

@Component({
  selector: 'repo-search',
  templateUrl: './repo-search.component.html',
  providers: [SearchService],
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent {
  model: any;
  searching = false;
  searchFailed = false;

  @Input() control: FormGroup;
  @Input() key: String;

  constructor(private _service: SearchService) {}

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term => {
        return this._service.search(term)
            .do(() => this.searchFailed = false)
            .catch(() => {
              this.searchFailed = true;
              return Observable.of([]);
            })
      })
      .do(() => this.searching = false);

  resultFormatter = (result: Object) => result['full_name'];
  inputFormatter = (x: {full_name: string}) => x.full_name;

  onChangeModel(value: any) {
    if (value && typeof value === 'object') {
      const result:Object = {};
      result['repo-id'] = value.id;
      this.control.patchValue(result);
    }
  }
}
