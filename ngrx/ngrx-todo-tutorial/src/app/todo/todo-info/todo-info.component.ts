import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromTodoReducer from '../../reducers/todo.reducer';
import * as fromTodoSelector from '../../selectors/todo.selector';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
})
export class TodoInfoComponent {
  count$!: Observable<number>;
  lastUpdate$!: Observable<string>;

  constructor(private store: Store<fromTodoReducer.State>) {
    this.count$ = this.store.pipe(select(fromTodoSelector.selectTotal));
    this.lastUpdate$ = this.store.pipe(
      select(fromTodoSelector.selectLastUpdate)
    );
  }
}
