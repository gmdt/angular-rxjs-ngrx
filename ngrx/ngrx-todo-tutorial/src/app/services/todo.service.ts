import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.httpClient
      .get<Todo[]>(environment.todoApiUrl)
      .pipe(delay(5000));
  }
}
