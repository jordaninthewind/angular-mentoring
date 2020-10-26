import { Component, OnInit } from '@angular/core';
import { TodoListServiceService } from '../todo-list-service.service';
import { TodoListItem } from './todo-list-item-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todoItems: TodoListItem[] = [];
  
  constructor(private todoService: TodoListServiceService) { }

  ngOnInit(): void {
    this.todoItems = this.todoService.getItems();
  }

}
