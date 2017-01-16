import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(private _http:Http) { }

  getTodos() {
    return this._http.get('/api/todos')
      .map(res => res.json());
  }

}
