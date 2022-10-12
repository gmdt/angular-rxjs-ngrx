import { EntitySelectors, EntityState } from '@ngrx/entity/src/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { State, todoAdapter } from '../reducers/todo.reducer';

export const getTodoState = createFeatureSelector<State>('todo');

export const {
  selectAll: selectAllTodo,
  selectTotal: selectCount,
}: EntitySelectors<Todo, EntityState<Todo>> = todoAdapter.getSelectors();

export const selectAll = createSelector(getTodoState, selectAllTodo);
export const selectTotal = createSelector(getTodoState, selectCount);
export const selectLastUpdate = createSelector(
  getTodoState,
  (state: State): string => state.lastUpdate
);
export const selectLoading = createSelector(
  getTodoState,
  (state: State): boolean => state.loading
);

export const selectError = createSelector(
  getTodoState,
  (state: State): string => state.error
);
