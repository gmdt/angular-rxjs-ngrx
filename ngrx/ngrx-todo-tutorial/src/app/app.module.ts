import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoInfoComponent } from './todo/todo-info/todo-info.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { todoReducer } from './reducers/todo.reducer';
import { environment } from 'src/environments/environment';
import { TodoEffects } from './effects/todo.effect';

@NgModule({
  declarations: [AppComponent, TodoInfoComponent, TodoListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([TodoEffects]),
    StoreModule.forRoot({ todo: todoReducer, router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 10,
          // logOnly: environment.production,
        })
      : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
