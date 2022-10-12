import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { TodoService } from '../services/todo.service';
import * as fromTodoActions from '../actions/todo.action';
import { Todo } from '../models/todo.model';
import { TodoActionsTypes } from '../enum/todo.enum';

@Injectable({
  providedIn: 'root',
})
export class TodoEffects {
  getAllTodo$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActionsTypes.GET_ALL_TODO),
      switchMap(() =>
        this.todoService.getAll().pipe(
          map((todos: Todo[]) => fromTodoActions.getAllTodoSuccess({ todos })),
          catchError((error: string) =>
            of(fromTodoActions.getAllTodoError({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
