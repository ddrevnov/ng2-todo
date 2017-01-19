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

  createTodo(body) {
    return this._http.post('/api/todos', body)
      .map(res => res.json());
  }

  deleteTodo(id) {
    return this._http.delete(`/api/todos/${id}`)
      .map(res => res.json());
  }

  updateTodo(todo) {
    return this._http.put(`/api/todos/${todo._id}`, todo)
      .map(res => res.json());
  }

}
