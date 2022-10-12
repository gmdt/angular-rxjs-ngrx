import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { TodoActionsTypes } from 'src/app/enum/todo.enum';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import * as fromTodoReducer from '../../reducers/todo.reducer';
import * as fromTodoAction from '../../actions/todo.action';
import * as fromTodoSelector from '../../selectors/todo.selector';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
})
export class TodoInfoComponent {
  count$!: Observable<number>;
  // todoList$!: Observable<Todo[]>;
  lastUpdate$!: Observable<string>;

  constructor(
    private todoService: TodoService,
    private store: Store<fromTodoReducer.State>
  ) {
    this.count$ = this.store.pipe(select(fromTodoSelector.selectTotal));
    // this.todoList$ = this.store.pipe(select(fromTodoSelector.selectAll));
    this.lastUpdate$ = this.store.pipe(
      select(fromTodoSelector.selectLastUpdate)
    );
  }

  deleteAllTodos(): void {
    this.store.dispatch(fromTodoAction.deleteAllTodo());
  }
}
