import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoInfoComponent } from './todo/todo-info/todo-info.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TodoListComponent },
  { path: 'info', component: TodoInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
