import { Component, OnInit } from '@angular/core';
import {TodoService} from "./todo.service";
import {Todo} from "../shared/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  newTodoTitle: string;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = [];
    this._todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  create() {
    let todo: Todo = new Todo(this.newTodoTitle);
    this._todoService.createTodo(todo)
      .subscribe(todo => {
        this.todos.push(todo);
        this.newTodoTitle = '';
      });
  }

}
