import { Component, OnInit, Input } from '@angular/core';
import { TodoListItem } from './todo-list-item-model';
import { TodoListServiceService } from '../todo-list-service.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() item: TodoListItem;

  constructor(private todoService: TodoListServiceService) { }

  ngOnInit(): void {
  }

  removeItem(): void {
    console.log(this);
    this.todoService.deleteItem(this.item);
  }

}
