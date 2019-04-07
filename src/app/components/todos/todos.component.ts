import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { } // mainly used to import services

  ngOnInit() {  // used like a normal constructor
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    // delete from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // delete from Server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todoItem => {
      this.todos.push(todoItem);
    });
  }
}
