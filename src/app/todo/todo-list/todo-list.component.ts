import {Component, OnInit, Input} from '@angular/core';
import {Todo} from "../../shared/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit() {
  }

  onDeleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

}
