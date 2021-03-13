import { Component } from '@angular/core';
import { Model, TodoItem  } from  './model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  model = new Model();


  getName() {
    return this.model.user;
  }
 
  getTodoItems() { 
    const filterBy = this.model.filterBy;
    if (filterBy) {      
      return this.model.items.filter(item => item.done.toString() == filterBy);
    } else {
      return this.model.items;
    }
  }

  filterTodoList(val) {
    this.model.filterBy = val;
  }

  addItem(target) {
    if (target.value) {
      this.model.items.push(new TodoItem(target.value, false));
      target.value = '';
    }
  }
}
