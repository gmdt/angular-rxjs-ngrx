import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../..//environments/environment';
import { Category } from '../models/category';
import { ResultRequest } from '../models/result-request';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private urlApi = environment.serverUrl.categories;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ResultRequest<Category>> {
    return this.http.get<ResultRequest<Category>>(this.urlApi);
  }
}
