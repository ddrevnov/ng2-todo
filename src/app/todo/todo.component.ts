import { Component, OnInit } from '@angular/core';
import {TodoService} from "./todo.service";
import {Todo} from "./todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = [];
    this._todoService.getTodos()
      .subscribe(todos => console.log(todos));
  }

}
