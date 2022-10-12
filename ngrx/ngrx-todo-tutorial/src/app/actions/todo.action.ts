import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { TodoActionsTypes } from '../enum/todo.enum';
import { Todo } from '../models/todo.model';

export const getAllTodo = createAction(TodoActionsTypes.GET_ALL_TODO);
export const getAllTodoSuccess = createAction(
  TodoActionsTypes.GET_ALL_TODO_SUCCESS,
  props<{ todos: Todo[] }>()
);
export const getAllTodoError = createAction(
  TodoActionsTypes.GET_ALL_TODO_ERROR,
  props<{ error: string }>()
);
export const addTodo = createAction(
  TodoActionsTypes.ADD_TODO,
  props<{ todo: Todo }>()
);
export const updateTodo = createAction(
  TodoActionsTypes.UPDATE_TODO,
  props<{ todo: Update<Todo> }>()
);
export const deleteTodo = createAction(
  TodoActionsTypes.DELETE_TODO,
  props<{ id: number }>()
);
export const deleteAllTodo = createAction(TodoActionsTypes.DELETE_ALL_TODO);
