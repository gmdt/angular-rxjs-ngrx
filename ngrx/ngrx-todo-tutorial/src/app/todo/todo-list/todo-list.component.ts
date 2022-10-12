import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import * as fromTodoReducer from '../../reducers/todo.reducer';
import * as fromTodoAction from '../../actions/todo.action';
import * as fromTodoSelector from '../../selectors/todo.selector';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todoList$!: Observable<Todo[]>;
  isEdit = false;
  loading$!: Observable<boolean>;
  name!: string;
  selectedTodo!: Todo;

  constructor(
    private todoService: TodoService,
    private store: Store<fromTodoReducer.State>
  ) {
    this.todoList$ = store.pipe(select(fromTodoSelector.selectAll));
    this.loading$ = store.pipe(select(fromTodoSelector.selectLoading));
  }

  addTodo(name: string): void {
    const todo: Todo = new Todo(name);
    this.store.dispatch(fromTodoAction.addTodo({ todo }));
    this.name = '';
  }

  updateTodo(todo: Todo): void {
    this.isEdit = true;
    this.name = todo.name;
    this.selectedTodo = todo;
  }

  confirmTodo(name: string): void {
    this.selectedTodo = { ...this.selectedTodo, name };
    this.store.dispatch(
      fromTodoAction.updateTodo({
        todo: {
          id: this.selectedTodo.id!,
          changes: this.selectedTodo,
        },
      })
    );
    this.isEdit = false;
    this.name = '';
  }

  deleteTodo(todo: Todo): void {
    const id = todo.id;
    if (id) {
      this.store.dispatch(fromTodoAction.deleteTodo({ id }));
    } else throw new Error('Oops, some error occurred...');
  }
}
