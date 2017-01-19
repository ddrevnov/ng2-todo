import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "../../shared/todo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() onDeleteTodo = new EventEmitter();
  editMode: boolean = false;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  }

  deleteTodo(event, id) {
    event.preventDefault();
    this._todoService.deleteTodo(id)
      .subscribe(todo => {
        this.onDeleteTodo.emit(this.todo);
      });
  }

  editTodo(event) {
    event.preventDefault();
    if (event.which === 13 || event.keyCode === 13) {
      this.updateTodo();
      this.editMode = false;
    }
  }

  updateTodo() {
    this._todoService.updateTodo(this.todo)
      .subscribe(todo => {
        console.log(`Todo: ${todo._id} has been updated`);
      });
  }

}
