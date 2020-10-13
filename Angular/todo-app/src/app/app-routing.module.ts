import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { TodoListComponent } from './todo-list/todo-list/todo-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
