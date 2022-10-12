import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromTodoReducer from './reducers/todo.reducer';
import * as fromTodoAction from './actions/todo.action';
import * as fromRouterSelector from './selectors/router.selector';
import { Observable } from 'rxjs';
import { RouterReducerState } from '@ngrx/router-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ngrx-todo-tutorial';
  currentUrl$!: Observable<string>;
  constructor(
    private store: Store<{
      todo: fromTodoReducer.State;
      router: RouterReducerState;
    }>
  ) {
    this.store.dispatch(fromTodoAction.getAllTodo());
    this.currentUrl$ = this.store.pipe(select(fromRouterSelector.selectUrl));
  }
}
