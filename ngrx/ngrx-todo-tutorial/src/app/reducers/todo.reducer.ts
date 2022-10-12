import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import {
  addTodo,
  deleteAllTodo,
  deleteTodo,
  getAllTodo,
  getAllTodoError,
  getAllTodoSuccess,
  updateTodo,
} from '../actions/todo.action';

export interface State extends EntityState<Todo> {
  lastUpdate: string;
  loading: boolean;
  error: string;
}
export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

const defaultTodo = {
  loading: false,
  error: '',
  lastUpdate: new Date().toString(),
};

const initialState: State = todoAdapter.getInitialState(defaultTodo);

export const reducer = createReducer(
  initialState,
  on(getAllTodo, (state: State) => ({
    ...state,
    lastUpdate: new Date().toString(),
    loading: true,
    error: '',
  })),
  on(getAllTodoSuccess, (state: State, { todos }) =>
    todoAdapter.setAll(todos, {
      ...state,
      lastUpdate: new Date().toString(),
      loading: false,
      error: '',
    })
  ),
  on(getAllTodoError, (state: State, { error }) => ({
    ...state,
    lastUpdate: new Date().toString(),
    loading: false,
    error,
  })),
  on(addTodo, (state: State, { todo }) =>
    todoAdapter.addOne(todo, {
      ...state,
      lastUpdate: new Date().toString(),
      loading: false,
      error: '',
    })
  ),
  on(deleteTodo, (state: State, { id }) =>
    todoAdapter.removeOne(id, {
      ...state,
      lastUpdate: new Date().toString(),
      loading: false,
      error: '',
    })
  ),
  on(updateTodo, (state: State, { todo }) =>
    todoAdapter.updateOne(todo, {
      ...state,
      lastUpdate: new Date().toString(),
      loading: false,
      error: '',
    })
  ),
  on(deleteAllTodo, (state: State) =>
    todoAdapter.removeAll({
      ...state,
      lastUpdate: new Date().toString(),
      loading: false,
      error: '',
    })
  )
);

/**
 *
 * @param state state
 * @param action all todo action
 * @returns EntityState<Todo>
 */

export function todoReducer(state: State = initialState, action: Action): any {
  return reducer(state, action);
}
