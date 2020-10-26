import { Injectable } from '@angular/core';
import { TodoListItem } from './todo-list/todo-list-item-model';

@Injectable({
  providedIn: 'root'
})
export class TodoListServiceService {

  items: TodoListItem[] = [
    { id: 1, title: "Todo item 1" },
    { id: 2, title: "Todo item 2" },
    { id: 3, title: "Todo item 3" },
    { id: 4, title: "Todo item 4" },
    { id: 5, title: "Todo item 5" },
  ];

  constructor() { }

  getItems(): TodoListItem[] {
    return this.items;
  }

  deleteItem(itemToDelete: TodoListItem): void {
    this.items = this.items.filter(i => i.id !== itemToDelete.id);
  }
}
