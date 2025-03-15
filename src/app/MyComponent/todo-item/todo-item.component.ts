import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
@Input() todo!: Todo;
@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckbox: EventEmitter<Todo> =new EventEmitter(); 
constructor(){

}
ngOnitVoid(): void{

}
delClick(todo: Todo){
this.todoDelete.emit(todo);
//alert("task done")
}
onCompleteClick(todo: Todo){
  this.todoCheckbox.emit(todo);  
}
}
